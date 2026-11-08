"use client"

import { useEffect, useRef } from "react"

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform vec3 uColor;

  float random(in float x) {
    return fract(sin(x) * 1e4);
  }

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

    vec2 fMosaicScal = vec2(4.0, 2.0);
    vec2 vScreenSize = vec2(256.0, 256.0);
    uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
    uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

    float t = time * 0.06 + random(uv.x) * 0.4;
    float lineWidth = 0.0008;

    vec3 color = vec3(0.0);
    for (int j = 0; j < 3; j++) {
      for (int i = 0; i < 5; i++) {
        color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 1.0 - length(uv));
      }
    }

    gl_FragColor = vec4(color[2] * uColor.r, color[1] * uColor.g, color[0] * uColor.b, 1.0);
  }
`

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function ShaderAnimation({ color = [1.0, 1.0, 1.0] }: { color?: [number, number, number] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    const program = gl.createProgram()
    if (!vs || !fs || !program) return

    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const posLoc = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const resLoc = gl.getUniformLocation(program, "resolution")
    const timeLoc = gl.getUniformLocation(program, "time")
    const colorLoc = gl.getUniformLocation(program, "uColor")
    gl.uniform3f(colorLoc, color[0], color[1], color[2])

    let time = 1.0
    let rafId: number | null = null
    let isVisible = true

    const onResize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(resLoc, canvas.width, canvas.height)
    }

    const render = () => {
      if (!isVisible) {
        rafId = null
        return
      }
      time += 0.05
      gl.uniform1f(timeLoc, time)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafId = requestAnimationFrame(render)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible && rafId === null) {
          rafId = requestAnimationFrame(render)
        }
      },
      { threshold: 0 }
    )

    onResize()
    observer.observe(canvas)
    window.addEventListener("resize", onResize)
    rafId = requestAnimationFrame(render)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", onResize)
      if (rafId !== null) cancelAnimationFrame(rafId)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [color[0], color[1], color[2]])

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
}

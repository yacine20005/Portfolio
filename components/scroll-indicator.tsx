"use client"

export function ScrollIndicator() {
  return (
    <div className="hidden md:block fixed bottom-12 left-12 z-20">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-rotate-slow will-change-transform"
        aria-label="Scroll down"
      >
        <defs>
          <path
            id="scroll-circle"
            d="M 36,36 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
          />
        </defs>
        <text
          fontSize="7.5"
          fontWeight="400"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="0.08em"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        >
          <textPath href="#scroll-circle">
            SCROLL DOWN · SCROLL DOWN ·
          </textPath>
        </text>
      </svg>
    </div>
  )
}

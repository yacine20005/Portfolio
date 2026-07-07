let hasRun = false

export function hasPreloaderRun(): boolean {
  if (typeof window === "undefined") return false
  return hasRun
}

export function setPreloaderHasRun(value: boolean): void {
  if (typeof window !== "undefined") {
    hasRun = value
  }
}

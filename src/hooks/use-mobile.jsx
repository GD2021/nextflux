import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 1024
const MEDIUM_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT)
  const [isMedium, setIsMedium] = useState(window.innerWidth <= MEDIUM_BREAKPOINT)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
      setIsMedium(window.innerWidth <= MEDIUM_BREAKPOINT)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isMobile, isMedium }
}

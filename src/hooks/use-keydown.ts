import { useEffect } from "react"

const useKeydown = (
  eventCode: string,
  callback: (e: KeyboardEvent) => void
) => {
  const onKeydown = (e: KeyboardEvent) => {
    if (e.code === eventCode) {
      callback(e)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeydown)

    return () => {
      window.removeEventListener("keydown", onKeydown)
    }
  })
}

export default useKeydown

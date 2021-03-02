import { useState, useEffect } from 'react'

const useBrowserSize = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth)
      setBrowserHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    browserHeight,
    browserWidth,
  }
}

export default useBrowserSize

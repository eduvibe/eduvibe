import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)

    io.observe(el)
    return () => io.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, inView]
}

export function useWatClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }
    tick()
    const id = setInterval(tick, 15000)
    return () => clearInterval(id)
  }, [])

  return time
}

export function useTyped(text, { speed = 22, start = true, delay = 0 } = {}) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start) return undefined
    setOut('')
    setDone(false)
    let i = 0
    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1
        setOut(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, start, delay])

  return [out, done]
}

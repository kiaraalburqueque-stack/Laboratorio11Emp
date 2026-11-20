import { useEffect, useState } from 'react'

// Returns `value` only after it has stopped changing for `delay` ms.
// Each new value cancels the pending timer, so fast typing produces a
// single update at the end instead of one per key.
export function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

import { useEffect, useRef, useState } from 'react'

type ClipboardStatus = 'idle' | 'copying' | 'copied' | 'error'

export function useClipboard(text: string) {
  const [status, setStatus] = useState<ClipboardStatus>('idle')
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      clearTimeout(resetTimer.current)
    }
  }, [])

  async function copy() {
    clearTimeout(resetTimer.current)
    setStatus('copying')
    try {
      await navigator.clipboard.writeText(text)
      if (!mounted.current) return
      setStatus('copied')
      resetTimer.current = setTimeout(() => setStatus('idle'), 2500)
    } catch {
      if (mounted.current) setStatus('error')
    }
  }

  return { status, copy }
}

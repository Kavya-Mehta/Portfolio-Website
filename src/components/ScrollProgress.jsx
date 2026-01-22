import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setP(total > 0 ? (scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" role="progressbar" aria-valuenow={Math.round(p)} aria-valuemin={0} aria-valuemax={100}>
        <div className="scroll-progress__bar" style={{ width: `${p}%` }} />
      </div>
      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(136, 146, 160, 0.15);
          z-index: 1001;
          overflow: hidden;
        }
        .scroll-progress__bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--spot));
          transition: width 0.1s ease-out;
        }
      `}</style>
    </>
  )
}

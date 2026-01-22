import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <>
      <button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      />
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 900;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent);
          color: #0c0f14;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 24px var(--accent-glow);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.3s;
          opacity: 0.95;
        }
        .back-to-top:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 32px var(--accent-glow);
          opacity: 1;
        }
        .back-to-top::after {
          content: '↑';
          font-size: 1.25rem;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

import { useState, useEffect } from 'react'

const SECTIONS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const py = window.scrollY + 120
      let current = 'hero'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= py) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

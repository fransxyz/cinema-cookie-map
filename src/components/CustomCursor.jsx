import React, { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  if (window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <div className="fixed pointer-events-none z-[99999]" style={{ top: position.y, left: position.x, width: '4px', height: '4px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 6px #00f0ff, 0 0 12px rgba(0,240,255,0.5)', transform: 'translate(-50%, -50%)' }} />
      <div className="fixed pointer-events-none z-[99998]" style={{ top: position.y, left: position.x, transform: 'translate(-50%, -50%)' }}>
        <div style={{ position: 'absolute', top: '-0.5px', left: '-10px', width: '20px', height: '1px', background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)', opacity: 0.7 }} />
        <div style={{ position: 'absolute', left: '-0.5px', top: '-10px', width: '1px', height: '20px', background: 'linear-gradient(transparent, #00f0ff, transparent)', opacity: 0.7 }} />
      </div>
      <div className="fixed pointer-events-none z-[99997]" style={{ top: position.y, left: position.x, width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(0,240,255,0.4)', boxShadow: '0 0 10px rgba(0,240,255,0.12)', transform: 'translate(-50%, -50%)' }} />
    </>
  )
}

export default CustomCursor

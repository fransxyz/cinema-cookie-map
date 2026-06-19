import React, { useState, useRef } from 'react'
import { countryPaths } from '../data/countries'

const WorldMap = ({ onCountrySelect }) => {
  const [scale, setScale] = useState(0.8)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'path') return
    setIsDragging(true)
    setDragStart({ x: e.clientX - translate.x, y: e.clientY - translate.y })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setTranslate({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setScale(prev => Math.max(0.3, Math.min(3, prev * delta)))
  }

  return (
    <div className="absolute inset-0 z-0">
      <div ref={containerRef} className="relative w-full h-full overflow-hidden select-none" style={{ cursor: isDragging ? 'grabbing' : 'grab' }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onWheel={handleWheel}>
        <div style={{ width: '100%', height: '100%', transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`, transformOrigin: 'center center', transition: isDragging ? 'none' : 'transform 0.05s linear' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2000 1001" className="map-svg">
            <defs><style>{'path{fill-rule:evenodd}'}</style></defs>
            {countryPaths.map((country) => (
              <path key={country.id} id={country.id} d={country.path} data-id={country.id} data-name={country.name} className={`country-path ${country.hasData ? 'has-data' : ''}`} role="button" tabIndex={0} aria-label={`${country.name} — click to view`} onClick={() => onCountrySelect && onCountrySelect(country)} />
            ))}
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 z-10 text-[10px] font-mono text-cyan-accent/40 uppercase tracking-wider">
        pinch to zoom · click country
      </div>
    </div>
  )
}

export default WorldMap

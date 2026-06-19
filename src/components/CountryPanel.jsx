import React from 'react'
import { X } from 'lucide-react'

const CountryPanel = ({ country, onClose }) => {
  if (!country) return null
  return (
    <div className="fixed bottom-4 right-4 z-40 bg-[#050c17]/95 backdrop-blur-md border border-[#00f0ff]/20 rounded-lg p-4 max-w-xs shadow-2xl">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={`https://flagcdn.com/w80/${country.id.toLowerCase()}.png`} alt={country.name} className="w-10 rounded shadow-lg" />
          <div>
            <h3 className="text-sm font-space font-bold text-white uppercase">{country.name}</h3>
            <p className="text-[10px] font-mono text-[#00f0ff]/60">{country.region}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#00f0ff]/60 hover:text-[#00f0ff]"><X className="w-4 h-4" /></button>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono uppercase text-[#00f0ff]/50">Sessions</span>
          <span className="text-sm font-mono font-bold text-[#00FF9D]">{country.sessions || 0}</span>
        </div>
      </div>
    </div>
  )
}

export default CountryPanel

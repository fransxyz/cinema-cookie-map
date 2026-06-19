import React from 'react'
import { Activity, Globe, Shield, SquareCheckBig } from 'lucide-react'

const Header = () => {
  const stats = { total: 1097, regions: 45, countries: 50 }

  return (
    <header className="absolute top-0 left-0 w-full z-20 pointer-events-none" style={{ background: 'linear-gradient(rgba(5,12,23,0.97), transparent)' }}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center pointer-events-auto" style={{ background: 'radial-gradient(circle, rgba(255,0,60,0.18), rgba(0,0,0,0.8))', border: '1.5px solid rgba(255,0,60,0.45)', boxShadow: '0 0 18px rgba(255,0,60,0.3)' }}>
            <span className="text-xl">🎬</span>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-wider uppercase font-space text-[#e8f4fb]">
              <span className="text-[#FF003C]" style={{ textShadow: '0 0 16px rgba(255,0,60,0.6)' }}>Cinema</span> Sessions <span className="text-[#00f0ff] font-light">Map</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-[#00FF9D] animate-pulse"></span>
              <span className="text-[8px] font-mono uppercase tracking-wider text-[#00f0ff]/40">Global Archive · Live</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-4">
          <div className="flex items-center gap-1.5 cursor-pointer px-3 py-1 rounded bg-[#00ea00]/10 hover:bg-[#00ea00]/20 border border-[#00ea00]/40 transition-all">
            <SquareCheckBig className="w-3 h-3 text-[#00ea00]" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#00ea00]">[ CHECKER ]</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Activity className="w-2.5 h-2.5 text-[#00f0ff]/45" />
            <span className="text-[9px] font-mono tracking-wider uppercase text-[#00f0ff]/40">Total</span>
            <span className="text-[11px] font-mono font-semibold text-[#00FF9D]" style={{ textShadow: '0 0 10px rgba(0,255,157,0.4)' }}>{stats.total}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Globe className="w-2.5 h-2.5 text-[#00f0ff]/45" />
            <span className="text-[9px] font-mono tracking-wider uppercase text-[#00f0ff]/40">Regions</span>
            <span className="text-[11px] font-mono font-semibold text-[#00f0ff]" style={{ textShadow: '0 0 10px rgba(0,240,255,0.4)' }}>{stats.regions}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Shield className="w-2.5 h-2.5 text-[#00f0ff]/45" />
            <span className="text-[9px] font-mono tracking-wider uppercase text-[#00f0ff]/40">Countries</span>
            <span className="text-[11px] font-mono font-semibold text-[#b026ff]" style={{ textShadow: '0 0 10px rgba(176,38,255,0.4)' }}>{stats.countries}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

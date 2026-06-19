import React from 'react'

const TelemetryPanel = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-20 pointer-events-auto">
      <div className="max-w-lg mx-auto px-4 pb-4">
        <div className="bg-[#050c17]/90 backdrop-blur-md border border-[#00f0ff]/20 rounded-lg p-4 scanlines">
          <h2 className="text-sm font-space font-bold text-white uppercase tracking-wider mb-2" style={{ textShadow: '0 0 10px rgba(0,240,255,0.4)' }}>
            Platform Telemetry and Global Session Archive
          </h2>
          <p className="text-[10px] font-inter text-[#00f0ff]/60 leading-relaxed mb-2">
            Welcome to the Global Session Archive. This educational platform provides researchers and security analysts with tools to visualize and study digital session management.
          </p>
          <p className="text-[10px] font-inter text-[#00f0ff]/40 leading-relaxed">
            Data is anonymized and strictly for educational research. Ensure all usage complies with local network administration policies.
          </p>
          <div className="mt-3 pt-3 border-t border-[#00f0ff]/10 flex justify-between items-center">
            <a href="/about" className="text-[10px] font-mono text-[#00f0ff] hover:text-[#00f0ff]/80 underline">Detailed Documentation</a>
            <span className="text-[8px] font-mono text-[#00f0ff]/30 uppercase">cinema.bandidoz.tech</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelemetryPanel

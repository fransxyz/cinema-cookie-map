import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = ({ progress }) => {
  const texts = ['INITIALIZING...', 'CONNECTING...', 'DECRYPTING...']
  const currentText = texts[Math.floor((progress / 100) * texts.length)] || texts[2]

  return (
    <motion.div className="fixed inset-0 z-[200] bg-[#2a0005]" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }}>
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-900/30 to-black flex items-center justify-center border border-red-500/30 text-6xl">
            🎬
          </div>
        </motion.div>
        
        <h1 className="mt-8 text-2xl font-bold tracking-[0.3em] uppercase font-space text-[#ffeaeb]">
          Cinema<span className="text-[#FF003C]">Sessions</span> Map
        </h1>
        <p className="text-xs font-mono tracking-[0.4em] text-[#FF003C]/70 uppercase mt-2">
          Premium Archive Distribution
        </p>

        <div className="w-64 mt-6">
          <div className="flex justify-between text-xs font-mono text-[#a54a56] mb-1">
            <span>{currentText}</span>
            <span className="text-[#FF003C]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-[#3a0e14] rounded-full overflow-hidden">
            <motion.div className="h-full bg-[#FF003C]" style={{ boxShadow: '0 0 10px #FF003C' }} initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import WorldMap from './components/WorldMap'
import CustomCursor from './components/CustomCursor'
import TelemetryPanel from './components/TelemetryPanel'

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setLoading(false), 500)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [loading])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bg-primary font-inter">
      <CustomCursor />
      {loading && <LoadingScreen progress={Math.min(progress, 100)} />}
      {!loading && (
        <>
          <Header />
          <WorldMap />
          <TelemetryPanel />
        </>
      )}
    </div>
  )
}

export default App

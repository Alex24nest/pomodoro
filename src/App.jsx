import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Timer from './components/Timer'
import Settings from './components/Settings'
import SettingButton from './components/SettingButton'

function App() {
  const [mode, setMode] = useState('work')
  const [showSettings, setShowSettings ] = useState(false)
  const [timer, setTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    interval: 4,
  })
  function toggleSettings () {
    setShowSettings(!showSettings)
  }

  return (
    <>
      {showSettings ? 
        <Settings timer={timer} setTimer={setTimer} /> 
      : (
        <>
          <Navigation mode={mode} setMode={setMode} />
          <Timer mode={mode} setMode={setMode} timer={timer} />
        </>
        )
      }
      <SettingButton 
        toggleSettings={toggleSettings} 
        showSettings={showSettings} 
      />
    </>
  )
}

export default App
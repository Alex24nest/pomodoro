import { useState, useEffect, useRef } from "react"

export default function Timer({ mode, setMode, timer }) {
  const [secondsLeft, setSecondsLeft] = useState(timer[mode] * 60)
  const [isActive, setIsActive] = useState(false)
  const [intervalDone, setIntervalDone] = useState(0)
  const alertShown = useRef(false)

  useEffect(() => {
    setSecondsLeft(timer[mode] * 60)
  }, [mode, timer])

    useEffect(() => {
      alertShown.current = false
    }, [mode])

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setSecondsLeft(sec => {
        if (sec <= 1) {

          if (!alertShown.current) {
            alert(`Timer ${mode} completed`)
            alertShown.current = true
          }

          if (mode === 'work' && intervalDone < timer.interval) {
            setMode('short')
          } else if (mode === 'short') {
            setMode('work')
            setIntervalDone(num => num + 1)
          } else if (mode === 'long') {
            setMode('work')
            setIntervalDone(0)
          } else {
            setMode('long')
          }

          setIsActive(false)
          return 0
        }
        return sec - 1;
      });
    }, 1000);

    return () => clearInterval(interval)
  }, [isActive, mode, intervalDone, timer])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const minText = String(minutes).padStart(2, "0")
  const secText = String(seconds).padStart(2, "0")

  return (
    <div>
      <div className="timer">{minText}:{secText}</div>
        <button className="start-pause" onClick={() => setIsActive(!isActive)}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button 
          className="reset" 
          onClick={() => {
            setSecondsLeft(timer[mode] * 60)
            setIsActive(false)
            alertShown.current = false
          }}>
          <img src="./reset.pdf" />
        </button>
    </div>
  );
}

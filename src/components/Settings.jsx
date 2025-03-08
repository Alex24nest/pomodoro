export default function Settings({timer, setTimer}) {
  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = Number(value)

    if (newValue > 99) newValue = 99

    setTimer(prevTimer => ({
      ...prevTimer,
      [name]: newValue
    }));
  };
  

  return (
    <div>
       <h1 className="settings-title">Time (minutes)</h1>

       <div className="settings-grid">
        {["work", "short", "long", "interval"].map((key) => (
          <div className="setting-row" key={key}>
            <label className="setting-label">
              {key === "work" ? "Focus Time" 
              : key === "short" ? "Short Break" 
              : key === "long" ? "Long Break" 
              : "Long Break Interval"}
            </label>
            <input
              type="number"
              className="setting-input"
              name={key}
              value={timer[key] || ""}
              onChange={handleChange}
              min="0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
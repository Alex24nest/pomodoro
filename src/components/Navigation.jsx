export default function Navigation({ mode, setMode }) {
  return (
    <nav>
      {['work', 'short', 'long'].map((m) => (
        <button
          key={m}
          className={`navigation ${ mode === m ? "active" : ""}`}
          onClick = {() => setMode(m)}
        >
          {m === "work" ? "Work Time" 
          : m === "short" ? "Short Break" 
          : "Long Break"}
        </button>
      ))}
    </nav>
  )
}
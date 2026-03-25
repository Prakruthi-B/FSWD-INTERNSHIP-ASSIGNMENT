import { useState } from "react";

function App() {
  const [mood, setMood] = useState("Happy");

  const moods = [
    { name: "Happy", color: "#ffe066", message: "You feel good" },
    { name: "Sad", color: "#74c0fc", message: "Take rest" },
    { name: "Angry", color: "#ff6b6b", message: "Stay calm" },
    { name: "Relaxed", color: "#8ce99a", message: "Keep it steady" }
  ];

  const currentMood = moods.find(m => m.name === mood);

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        backgroundColor: currentMood.color,
        paddingTop: "60px"
      }}
    >
      <h1>Mood Selector</h1>

      <h2>{mood}</h2>
      <p>{currentMood.message}</p>

      <div>
        {moods.map((m, index) => (
          <button
            key={index}
            onClick={() => setMood(m.name)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              cursor: "pointer"
            }}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
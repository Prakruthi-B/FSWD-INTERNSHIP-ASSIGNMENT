import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
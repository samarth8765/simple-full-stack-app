import { CreateTodo } from "./Components/CreateTodos";
import "./App.css";
import { Todos } from "./Components/Todos";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

export function Todos({ todos, setTodos }) {
  const toggleCompleted = (todoId, todoCompleted) => {
    const updatedTodos = todos.map((todo) => {
      if (todo._id === todoId) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(updatedTodos);
    fetch("http://localhost:8000/todos", {
      method: "PUT",
      body: JSON.stringify({
        id: todoId.toString(),
        completed: !todoCompleted,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button
              type="button"
              onClick={() => {
                toggleCompleted(todo._id, todo.completed);
              }}
            >
              {todo.completed === true ? "completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

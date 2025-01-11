import { useState } from "react";
import TodoList from "./todo-list";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}

export default App;

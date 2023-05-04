import { useState, useReducer } from "react";
import "./App.css";
// การใช้ useReducer
const initialTodos = [
  { id: 1, title: "todo 1", complete: false },
  { id: 2, title: "todo 2", complete: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  console.log(todos)
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => handleComplete(todo)}
          />
          {todo.title}
        </div>
      ))}
    </>
  );
}

export default App;

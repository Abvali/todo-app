import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React basics", done: true },
    { id: 2, text: "Practice ReactJS", done: false },
  ]);

  const [filter, setFilter] = useState("all");

  function addTodo(text) {
    if (!text.trim()) return;
    const newText = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newText]);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function editTodo(id, newText) {
    if (!newText.trim()) return;
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  function deleteDoneTodo() {
    setTodos((prev) => prev.filter((todo) => !todo.done));
  }

  function deleteAllTodo() {
    setTodos([]);
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        filteredTodos,
        deleteTodo,
        toggleTodo,
        editTodo,
        deleteDoneTodo,
        deleteAllTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

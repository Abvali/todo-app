import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
        <div className="bg-white p-6 w-full max-w-2xl rounded-2xl text-center shadow-md my-auto">
          <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>

          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
export default App;

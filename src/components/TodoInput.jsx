import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  function handleAddTodo() {
    addTodo(text);
    setText("");
  }

  return (
    <div className="mb-6 border border-gray-200 p-5 rounded">
      <div>
        <input
          type="text"
          placeholder="New todo"
          value={text}
          className="border border-gray-300 rounded w-full mb-3 px-3 py-2"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-teal-500 w-full rounded text-white py-2 hover:bg-teal-600"
          onClick={handleAddTodo}
        >
          Add new task
        </button>
      </div>
    </div>
  );
}

export default TodoInput;

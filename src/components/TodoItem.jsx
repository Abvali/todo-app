import React from "react";

function TodoItem({ text, done }) {
  return (
    <div className="flex justify-between border border-gray-200 rounded p-3 my-4">
      <div className={` ${done ? "line-through text-red-500" : ""}`}>
        {text}
      </div>
      <div className="flex items-center gap-3">
        <input type="checkbox" readOnly checked={done} />
        <button>✏️</button>
        <button>🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;

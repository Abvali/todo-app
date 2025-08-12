import React from "react";

function TodoInput() {
  return (
    <div className="mb-6 border border-gray-200 p-5 rounded">
      <form>
        <input
          type="text"
          placeholder="New todo"
          className="border border-gray-300 rounded w-full mb-3 px-3 py-2"
        />
        <button className="bg-teal-500 w-full rounded text-white py-2 hover:bg-teal-600">
          Add new task
        </button>
      </form>
    </div>
  );
}

export default TodoInput;

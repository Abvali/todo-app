import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex justify-between my-4">
        <button className="bg-teal-500 text-white rounded px-18 py-2 hover:bg-teal-600">
          All
        </button>
        <button className="bg-teal-500 text-white rounded px-18 py-2 hover:bg-teal-600">
          Done
        </button>
        <button className="bg-teal-500 text-white rounded px-18 py-2 hover:bg-teal-600">
          Todo
        </button>
      </div>
      <TodoItem text="Learn React basics" done={true} />
      <TodoItem text="Practice ReactJS" done={false} />
      <div className="flex justify-between my-4">
        <button className="bg-red-500 text-white rounded px-18 py-2 hover:bg-red-600">
          Delete done tasks
        </button>
        <button className="bg-red-500 text-white rounded px-18 py-2 hover:bg-red-600">
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

export default TodoList;

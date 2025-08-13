import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

function TodoList() {
  const {
    todos,
    deleteDoneTodo,
    deleteAllTodo,
    filteredTodos,
    filter,
    setFilter,
  } = useContext(TodoContext);
  return (
    <div>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex justify-between my-4">
        <button
          className="bg-teal-500 text-white rounded px-18 py-2 hover:bg-teal-600"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="bg-teal-500 text-white rounded px-18 py-2 hover:bg-teal-600"
          onClick={() => setFilter("done")}
        >
          Done
        </button>
        <button
          className="bg-teal-500 text-white rounded px-18 py-2 hover:bg-teal-600"
          onClick={() => setFilter("todo")}
        >
          Todo
        </button>
      </div>
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
        ) : (
          <p className="text-center text-gray-500">No tasks found</p>
        )}
      </div>

      <div className="flex justify-between my-4">
        <button
          className="bg-red-500 text-white rounded px-18 py-2 hover:bg-red-600"
          onClick={deleteDoneTodo}
        >
          Delete done tasks
        </button>
        <button
          className="bg-red-500 text-white rounded px-18 py-2 hover:bg-red-600"
          onClick={deleteAllTodo}
        >
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

export default TodoList;

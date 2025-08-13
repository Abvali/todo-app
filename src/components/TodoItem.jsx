import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ id, text, done }) {
  const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  function handleSave() {
    editTodo(id, newText);
    setIsEditing(false);
  }

  return (
    <div className="flex justify-between border border-gray-200 rounded p-3 my-4">
      <div>
        {isEditing ? (
          <input
            className="border p-1 w-full rounded border-gray-300 focus:border-sky-500"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            className={` ${done ? "line-through text-red-500" : ""}`}
            onClick={() => toggleTodo(id)}
          >
            {text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          readOnly
          checked={done}
          onChange={() => toggleTodo(id)}
        />
        {isEditing ? (
          <button onClick={handleSave}>💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏️</button>
        )}

        <button onClick={() => deleteTodo(id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;

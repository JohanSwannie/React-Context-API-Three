import { useState } from "react";
import { useToDos } from "../contexts/ToDoContext";

function ToDoItem({ todo }) {
  const [toDoMessage, setToDoMessage] = useState(todo.toDo);
  const [canEditToDo, setCanEditToDo] = useState(false);

  const { toDoUpdate, toDoDelete, toggleComplete } = useToDos();

  const editToDo = () => {
    toDoUpdate(todo.id, { ...todo, toDo: toDoMessage });
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-2 py-1 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.toDoCompleted ? "bg-[#70af55]" : "bg-[#84caa4]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.toDoCompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          canEditToDo ? "border-white px-2 py-1" : "border-transparent"
        }`}
        value={toDoMessage}
        onChange={(e) => setToDoMessage(e.target.value)}
        readOnly={!canEditToDo}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border-black border-2 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.toDoCompleted) return;
          if (canEditToDo) {
            editToDo();
          } else setCanEditToDo((prev) => !prev);
        }}
        disabled={todo.toDoCompleted}
      >
        {canEditToDo ? "📁" : "✏️"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 border-black border-2"
        onClick={() => toDoDelete(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDoItem;

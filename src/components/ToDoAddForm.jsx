import { useState, useEffect, useRef } from "react";
import { useToDos } from "../contexts/ToDoContext";

function ToDoAddForm() {
  const [newToDoItem, setNewToDoItem] = useState("");

  const addAnotherToDo = useRef();

  const { toDoAdd } = useToDos();

  useEffect(() => {
    addAnotherToDo.current.focus();
  }, []);

  const addToDo = (event) => {
    event.preventDefault();
    if (!newToDoItem) return;
    toDoAdd({ newToDoItem, toDoCompleted: false });
    setNewToDoItem("");
  };

  return (
    <form onSubmit={addToDo} className="flex border-white border-2">
      <input
        type="text"
        placeholder="Add another ToDo"
        className="w-full border placeholder:text-white-700 border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5"
        name="todo"
        defaultValue={newToDoItem}
        ref={addAnotherToDo}
        maxLength={75}
        onChange={(event) => setNewToDoItem(event.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-600 text-white shrink-0 border-black border-2"
      >
        Add ToDo
      </button>
    </form>
  );
}

export default ToDoAddForm;

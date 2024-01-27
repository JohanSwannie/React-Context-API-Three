import { useState, useRef, useEffect } from "react";
import { useTodo } from "../contexts";

function TodoAddForm() {
  const [todo, setTodo] = useState("");

  const addToDoMessage = useRef();

  const { addToDo } = useTodo();

  useEffect(() => {
    addToDoMessage.current.focus();
  }, []);

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addToDo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex border-white border-2">
      <input
        type="text"
        placeholder="Create a Todo......."
        className="w-full border placeholder:text-white-700 px-3 outline-none bg-white/20 py-1.5"
        value={todo}
        name="todo"
        ref={addToDoMessage}
        maxLength={100}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-600 text-white shrink-0 border-black border-2"
      >
        Add
      </button>
    </form>
  );
}

export default TodoAddForm;

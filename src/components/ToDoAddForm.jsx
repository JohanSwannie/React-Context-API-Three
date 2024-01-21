import { useState, useRef, useEffect } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoAddForm() {
  const [todo, setTodo] = useState("");

  const addToDoMessage = useRef();

  const { addTodo } = useTodo();

  useEffect(() => {
    addToDoMessage.current.focus();
  }, []);

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex border-white border-2">
      <input
        type="text"
        placeholder="Create a Todo......."
        className="w-full border placeholder:text-slate-700 border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5"
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

import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import TodoAddForm from "./components/ToDoAddForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateToDo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todosStored = JSON.parse(localStorage.getItem("todos"));
    if (todosStored && todosStored.length > 0) {
      setTodos(todosStored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#212a2b] min-h-screen select-none">
        <div className="w-full max-w-7xl mx-auto shadow-lg shadow-white rounded-md px-10 py-10 text-white">
          <h1 className="text-2xl font-bold text-center mb-2">Todos List</h1>
          <div className="mb-4">
            <TodoAddForm />
          </div>
          <div className="flex flex-wrap gap-y-2">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

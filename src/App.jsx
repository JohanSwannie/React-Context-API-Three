import { useState, useEffect } from "react";
import { ToDoProvider } from "./contexts";
import ToDoAddForm from "./components/ToDoAddForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [listOfToDos, setListOfToDos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setListOfToDos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listOfToDos));
  }, [listOfToDos]);

  const toDoAdd = (todo) => {
    setListOfToDos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const toDoUpdate = (id, todo) => {};

  const toDoDelete = () => {};

  const toggleComplete = () => {};

  return (
    <ToDoProvider
      value={{ listOfToDos, toDoAdd, toDoUpdate, toDoDelete, toggleComplete }}
    >
      <div className="bg-[#1a2627] min-h-screen select-none">
        <div className="w-full max-w-5xl text-white mx-auto shadow-lg shadow-white rounded-2xl px-12 py-16">
          <h1 className="text-center mb-6 text-2xl font-bold">My ToDo List</h1>
          <div className="mb-5">
            <ToDoAddForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {listOfToDos.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;

import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  listOfToDos: [
    {
      id: 1,
      toDo: "Initial To Do Message",
      toDoCompleted: false,
    },
  ],
  toDoAdd: (todo) => {},
  toDoUpdate: (id, todo) => {},
  toDoDelete: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDos = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;

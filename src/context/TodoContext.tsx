import { createContext, useContext, useState, type ReactNode } from "react";

const TodoContext = createContext({});

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState([]);

  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
}

export const useTodo = () => useContext(TodoContext);

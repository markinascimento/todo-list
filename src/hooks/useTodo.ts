// -> ReactJS
import { useContext } from "react";

// -> ContextAPI
import { TodoContext, type ITodoContextProps } from "../context/TodoContext";

export function useTodo(): ITodoContextProps {
  return useContext(TodoContext);
}

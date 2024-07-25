// -> ReactJS
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// -> Types
import type { TaskDTO } from "../dtos/TaskDTO";
export interface ITodoContextProps {
  filteredNewTasks: TaskDTO[];
  filteredTasksComplete: TaskDTO[];
  handleRemoveTask(task: string): void;
  handleCompleteTask(task: string): void;
  handleCreateNewTask(task: string, type: string): void;
}

export const TodoContext = createContext({} as ITodoContextProps);

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  const handleCreateNewTask = useCallback((task: string, type: string) => {
    setTasks((prevState) => {
      const itemIndex = prevState.findIndex((item) => item.task === task);

      if (itemIndex >= 0) {
        return prevState;
      }

      const newTask = {
        task,
        type,
        complete: false,
      };

      return [...prevState, newTask];
    });
  }, []);

  const handleRemoveTask = useCallback((task: string) => {
    setTasks((prevState) => prevState.filter((item) => item.task !== task));
  }, []);

  const handleCompleteTask = useCallback((task: string) => {
    setTasks((prevState) => {
      return prevState.map((item) => {
        if (item.task === task) {
          return {
            ...item,
            complete: true,
          };
        }

        return item;
      });
    });
  }, []);

  const filteredNewTasks = useMemo(
    () => tasks.filter((task) => task.complete === false),
    [tasks]
  );

  const filteredTasksComplete = useMemo(
    () => tasks.filter((task) => task.complete === true),
    [tasks]
  );

  return (
    <TodoContext.Provider
      value={{
        filteredNewTasks,
        filteredTasksComplete,
        handleCompleteTask,
        handleCreateNewTask,
        handleRemoveTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

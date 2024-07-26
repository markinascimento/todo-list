// -> ReactJS
import { useCallback, useState } from "react";

// -> Icons lib
import { X } from "lucide-react";

// -> Custom hooks
import { useTodo } from "../hooks/useTodo";

// -> Utils
import { cn } from "../utils/cn";

// -> Components
import { TypeIcon } from "./TypeIcon";

// -> Types
import type { TaskDTO } from "../dtos/TaskDTO";
interface ITaskCardProps {
  task: TaskDTO;
  hasButtonRemove?: boolean;
  hasButtonCheckedComplete?: boolean;
}

export function TaskCard({
  task,
  hasButtonRemove = true,
  hasButtonCheckedComplete = true,
}: ITaskCardProps) {
  const { handleCompleteTask, handleRemoveTask } = useTodo();

  const [checked, setChecked] = useState<boolean>(task.complete);

  const toggleChecked = useCallback(() => {
    setChecked(true);

    setTimeout(() => {
      handleCompleteTask(task.task);
    }, 350);
  }, [task, handleCompleteTask]);

  return (
    <div
      className="flex items-center justify-between pl-4 pr-6 bg-zinc-100 w-full h-14 
      rounded-lg shadow relative"
    >
      <div className="flex items-center gap-2 max-w-[93%]">
        {hasButtonCheckedComplete && (
          <button
            type="button"
            onClick={toggleChecked}
            className={cn(
              "min-w-5 min-h-5 rounded bg-zinc-300 transition-colors duration-300",
              checked && "bg-green-500"
            )}
          />
        )}
        <span className="font-medium text-sm tracking-[-0.5px] w-full truncate">
          {task.task}
        </span>
      </div>

      <TypeIcon type={task.type} />

      {hasButtonRemove && (
        <button
          type="button"
          onClick={() => handleRemoveTask(task.task)}
          className="flex items-center justify-center absolute size-5 -top-2 right-0 bg-red-500 rounded-full"
        >
          <X className="size-3 text-white" strokeWidth={3.5} />
        </button>
      )}
    </div>
  );
}

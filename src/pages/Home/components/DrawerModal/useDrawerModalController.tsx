// -> ReactJS
import { useState, type ChangeEvent, type FormEvent } from "react";

// -> Context API
import { useTodo } from "../../../../hooks/useTodo";

export function useDrawerModalController({ onClose }: { onClose(): void }) {
  const { handleCreateNewTask } = useTodo();

  const [task, setTask] = useState<string>("");

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    handleCreateNewTask(task);
    onClose();
    setTask("");
  }

  return {
    task,
    handleChangeTask,
    handleSubmitForm,
  };
}

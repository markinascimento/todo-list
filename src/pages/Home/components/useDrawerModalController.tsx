// -> ReactJS
import { useState, type ChangeEvent, type FormEvent } from "react";

export function useDrawerModalController({ onClose }: { onClose(): void }) {
  const [task, setTask] = useState<string>("");

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    console.log({ task });
    onClose();
    setTask("");
  }

  return {
    task,
    handleChangeTask,
    handleSubmitForm,
  };
}

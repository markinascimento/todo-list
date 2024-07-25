// -> Icons lib
import { X } from "lucide-react";

// -> Utils
import { cn } from "../../../utils/cn";

// -> Controller
import { useDrawerModalController } from "./useDrawerModalController";

// -> Components
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

// -> Types
interface IDrawerModalProps {
  open: boolean;
  onClose(): void;
}

export function DrawerModal({ open, onClose }: IDrawerModalProps) {
  const { task, handleChangeTask, handleSubmitForm } = useDrawerModalController(
    { onClose }
  );

  return (
    <div
      className={cn(
        `bg-zinc-900 fixed w-full h-[80vh] -bottom-[100%] left-0 z-10 transition-all duration-1000 
        rounded-t-[32px] overflow-hidden`,
        open && "bottom-0"
      )}
    >
      <main className="flex flex-col items-center justify-start w-full max-w-[600px] h-full px-4 gap-4 m-auto">
        <header className="flex items-center justify-end px-4 w-full min-h-12">
          <h2 className="w-full text-zinc-100 font-semibold text-center md:text-lg">
            Cadastrar uma nova atividade
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10"
          >
            <X className="size-5 text-zinc-100" />
          </button>
        </header>

        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col flex-1 h-full w-full items-center justify-center gap-4 pb-10"
        >
          <Input
            placeholder="Titulo"
            value={task}
            onChange={handleChangeTask}
          />

          <Input placeholder="Tipo" />
          <Button type="submit" />
        </form>
      </main>
    </div>
  );
}

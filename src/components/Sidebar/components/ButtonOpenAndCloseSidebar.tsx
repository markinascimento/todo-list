// -> Utils
import { cn } from "../../../utils/cn";

// -> Types
interface IButtonOpenAndCloseSidebarProps {
  open: boolean;
  onOpen(): void;
}

export function ButtonOpenAndCloseSidebar({
  open,
  onOpen,
}: IButtonOpenAndCloseSidebarProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex flex-col gap-1 top-3 left-3 fixed z-10 md:hidden"
    >
      <div
        className={cn(
          "w-6 h-[3px] bg-zinc-900 transition-all duration-300 rounded-full",
          open && "rotate-45 mt-2"
        )}
      />

      <div
        className={cn("w-6 h-[3px] bg-zinc-900 rounded-full", open && "hidden")}
      />

      <div
        className={cn(
          "w-6 h-[3px] bg-zinc-900 transition-all duration-300 rounded-full",
          open && "-rotate-45 -mt-[7px] -ml-[0.5px]"
        )}
      />
    </button>
  );
}

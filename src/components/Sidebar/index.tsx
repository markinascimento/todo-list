import { useState } from "react";
import { cn } from "../../utils/cn";
import { ButtonOpenAndCloseSidebar } from "./components/ButtonOpenAndCloseSidebar";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-1 w-full h-full">
      <aside
        className={cn(
          "bg-white shadow-2xl fixed w-full h-full -left-[100%] transition-all duration-1000 md:static md:w-64",
          open && "left-0"
        )}
      ></aside>

      <ButtonOpenAndCloseSidebar open={open} onOpen={toggleOpen} />

      <main className="w-full flex flex-1 pt-10 px-3 md:p-4">
        <span> main </span>
      </main>
    </div>
  );
}

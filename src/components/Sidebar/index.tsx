// -> ReactJS
import { useCallback, useState } from "react";

// -> Routing lib
import { Outlet } from "react-router-dom";

// -> Icons lib
import { CircleCheckBig, Home } from "lucide-react";

// -> Utils
import { cn } from "../../utils/cn";

// -> Components
import { ButtonOpenAndCloseSidebar } from "./components/ButtonOpenAndCloseSidebar";
import { MenuItem } from "./components/MenuItem";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full overflow-hidden">
      <ButtonOpenAndCloseSidebar open={open} onOpen={toggleOpen} />

      <aside
        className={cn(
          "bg-gray-50 fixed w-full h-full -left-[100%] transition-all duration-1000 md:static md:w-72",
          open && "left-0"
        )}
      >
        <nav className="px-4 w-full h-full space-y-4 pt-12 md:pt-4">
          <MenuItem path="Home" link="/" Icon={Home} />
          <MenuItem path="Concluído" link="/completed" Icon={CircleCheckBig} />
        </nav>
      </aside>

      <main className="w-full flex flex-col flex-1 pt-10 px-3 md:p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

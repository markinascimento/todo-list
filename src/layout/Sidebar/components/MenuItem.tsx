// -> ReactJS
import type { ElementType } from "react";

// -> Routing lib
import { Link, useLocation } from "react-router-dom";

// -> Utils
import { cn } from "../../../utils/cn";

// -> Types
interface IMenuItemProps {
  link: string;
  path: string;
  quantity: number;
  Icon: ElementType;
}

export function MenuItem({ path, link, quantity, Icon }: IMenuItemProps) {
  const { pathname } = useLocation();

  const isActive = pathname === link;

  return (
    <div
      className={cn(
        "flex items-center justify-between px-2 h-10 rounded-lg transition-colors",
        isActive ? "bg-gray-200" : "bg-transparent hover:bg-gray-100"
      )}
    >
      <Link to={link} className="flex items-center gap-2 w-full">
        <Icon className="size-5 text-zinc-900" />
        <span className="font-medium tracking-[-0.5px] text-zinc-900">
          {path}
        </span>
      </Link>

      {quantity > 0 && (
        <div className="flex items-center justify-center w-8 h-6 bg-white rounded-md">
          <span className="text-sm font-medium"> {quantity} </span>
        </div>
      )}
    </div>
  );
}

// -> ReactJS
import type { ComponentProps } from "react";

// -> Utils
import { cn } from "../utils/cn";

// -> Types
interface IButtonProps extends ComponentProps<"button"> {
  className?: string;
}

export function Button({ className, ...rest }: IButtonProps) {
  return (
    <button
      {...rest}
      className={cn(`w-full h-10 rounded-full lg:h-[52px] bg-white`, className)}
    >
      <span className="font-semibold text-lg"> Cadastrar </span>
    </button>
  );
}

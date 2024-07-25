// -> ReactJS
import type { ComponentProps } from "react";

// -> Utils
import { cn } from "../utils/cn";

// -> Types
interface IInputProps extends ComponentProps<"input"> {
  className?: string;
}

export function Input({ className, ...rest }: IInputProps) {
  return (
    <input
      {...rest}
      className={cn(
        `w-full h-10 rounded-full bg-zinc-800 text-zinc-100 border-2 border-transparent outline-none 
      focus:border-zinc-100 px-4 font-medium lg:h-[52px]`,
        className
      )}
    />
  );
}

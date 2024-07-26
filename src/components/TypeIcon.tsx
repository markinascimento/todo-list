// -> Icons lib
import {
  BriefcaseBusiness,
  ClipboardCheck,
  Dumbbell,
  House,
  ShoppingCart,
} from "lucide-react";

export function TypeIcon({ type }: { type: string }) {
  return (
    <div className="bg-zinc-200 p-2 rounded-full">
      {type === "GYM" && (
        <Dumbbell className="size-5 text-zinc-900" strokeWidth={2.5} />
      )}

      {type === "WORK" && (
        <BriefcaseBusiness className="size-5 text-zinc-900" strokeWidth={2.5} />
      )}

      {type === "MARKET" && (
        <ShoppingCart className="size-5 text-zinc-900" strokeWidth={2.5} />
      )}

      {type === "TASKS" && (
        <ClipboardCheck className="size-5 text-zinc-900" strokeWidth={2.5} />
      )}

      {type === "DOMESTIC_ACTIVITIES" && (
        <House className="size-5 text-zinc-900" strokeWidth={2.5} />
      )}
    </div>
  );
}

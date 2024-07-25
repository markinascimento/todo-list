// -> Date lib
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// -> Utils
import { getMomentDay } from "../../../utils/getMomentDay";

// -> Config
import { daysWeek } from "../../../config/daysWeek";

export function Header() {
  const today = new Date();

  const formattedDate = format(today, "dd MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const currentDay = today.getDay();

  const currentHour = today.getHours();

  return (
    <header className="flex flex-col gap-px h-14 w-full">
      <h1 className="font-semibold text-xl tracking-[-1px] text-zinc-900">
        {getMomentDay(currentHour)}
      </h1>

      <p className="font-medium text-sm text-zinc-500">
        Hoje é {daysWeek[String(currentDay)]}, {formattedDate}
      </p>
    </header>
  );
}

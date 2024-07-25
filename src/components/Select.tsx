// -> Types
interface ISelectProps {
  type: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  setType(type: string): void;
}

export function Select({ type, options, setType }: ISelectProps) {
  return (
    <select
      defaultValue={type}
      onChange={(event) => setType(event.target.value)}
      className="w-full h-10 rounded-full bg-zinc-800 text-zinc-100 border-2 border-transparent outline-none 
      focus:border-zinc-100 px-4 font-medium lg:h-[52px] first:text-red-500"
    >
      <option className="!text-red-500 hidden">Selecionar tipo</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

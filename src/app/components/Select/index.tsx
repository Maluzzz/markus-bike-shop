import { Props } from "./types";

export function Select({ options, label}: Props) {
  return (
    <div className="flex flex-col gap-2">
    <label htmlFor="select" className="text-neutral-400 text-sm font-medium">{label}</label>
    <select className="p-4 border border-primary rounded-xl text-primary cursor-pointer transition-all duration-300 ease-in-out pr-10
    appearance-none focus:outline-none bg-[url('/arrow-down.svg')] bg-no-repeat bg-[calc(100%-8px)_center] bg-[length:24px_24px]" >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    </div>
  );
}

import clsx from "clsx";
import { Props } from "./types";

export function ColorPicker({ color, isSelected = false, onClick ,disabled=false}: Props) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={clsx(
        " border-4 opacity-80 border-white rounded-full hover:opacity-100 hover:!border-primary   cursor-pointer transition-all duration-300 ease-in-out size-12",
        isSelected && "!border-primary" ,
        disabled && "!opacity-15 !cursor-not-allowed pointer-events-none" 
      )}
      style={{ backgroundColor: color, borderColor: color }}
    ></div>
  );
}

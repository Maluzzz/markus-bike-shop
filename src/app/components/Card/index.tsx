import clsx from "clsx";
import { Props } from "./types";

export function Card({name, isSelected = false, onClick, disabled}: Props) {
    return (
      <div 
      onClick={disabled ? undefined : onClick}
      className={
        clsx("w-fit p-4 border border-primary rounded-xl hover:bg-primary-light hover:text-white cursor-pointer transition-all duration-300 ease-in-out",
            isSelected ? "bg-primary-light text-white" : "bg-white text-primary-light",
            disabled && "bg-neutral-300 text-neutral-700 border-neutral-400 cursor-not-allowed opacity-50 pointer-events-none")
      }>
        {name}
      </div>
    )
}
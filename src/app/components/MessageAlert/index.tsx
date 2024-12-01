import clsx from "clsx";
import { Props } from "./types";

export function MessageAlert({ message, type }:Props) {
  return (
    <div
      className={clsx(
        "w-full border-2  font-semibold p-4 rounded-lg",
        type === "success"
          ? "bg-success-light border-success text-success-dark"
          : "bg-error-light border-error text-error-dark"
      )}
    >
      {message}{" "}
    </div>
  );
}

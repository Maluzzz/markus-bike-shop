"use client";
import clsx from "clsx";
import { useLogic } from "./logic";

export default function Receipt() {
  const { totalPrice, priceBreakDown } = useLogic();
  return (
    <div className="flex items-center h-full w-full transition-all duration-300 ease-in-out ">
     {totalPrice > 0 && <div className="my-4 bg-white shadow-lg text-primary p-3 w-full rounded-md">
        <div className="font-semibold text-center">Receipt: #{Math.floor(Math.random() * 100)} </div>
        <div>
          {priceBreakDown.map((part) => {
            return (
              <div className="flex gap-2 justify-between py-4" key={part.id}>
                <span>{part.name}</span>
                {part.newPrice ? (
                  <span
                    className={clsx(
                      part.newPrice < part.price ? "text-success" :"text-error",
                      
                    )}
                  >
                    <span className={"text-primary line-through"}>
                      {part.price}$
                    </span>{" "}
                    {part.newPrice}$
                  </span>
                ) : (
                  <span>{part.price}$ </span>
                )}
              </div>
            );
          })}
        </div>
        <hr />
        <dl className="flex justify-between py-3">
          <dt>Total</dt>
          <dd>{totalPrice}$</dd>
        </dl>
      </div>}
    </div>
  );
}
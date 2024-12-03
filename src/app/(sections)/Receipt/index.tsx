"use client";
import { useLogic } from "./logic";

export default function Receipt() {
  const { totalPrice, priceBreakDown } = useLogic();
  return (
    <div className="flex items-center h-full w-full transition-all duration-300 ease-in-out">
      <div className="my-4 bg-white shadow-lg text-primary p-3 w-full">
        <div className="font-semibold text-center">Your Receipt</div>
        <div>
          {priceBreakDown.map((part) => {
            return (
              <div className="flex gap-2 justify-between py-4" key={part.id}>
                <span>{part.name}</span>
                <span>{part.price} $ </span>
              </div>
            );
          })}
        </div>
        <hr />
        <dl className="flex justify-between py-3">
          <dt>Total</dt>
          <dd>{totalPrice}$</dd>
        </dl>
      </div>
    </div>
  );
}

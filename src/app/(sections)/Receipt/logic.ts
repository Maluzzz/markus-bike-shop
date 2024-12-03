import { PartType } from "@/app/lib/parts/types";
import { useFormContext } from "react-hook-form";

type PriceBreakDown = { id: string; name: string; price: number };

export function useLogic() {
  const { watch } = useFormContext();
  const bikeSelection = watch("selections");

  const priceBreakDown = Object.values(bikeSelection || {}).reduce(
    (acc: PriceBreakDown[], curr) => {
      const part = curr as PartType;
      if (part) {
        return [...acc, { id: part.id, name: part.name, price: part.price }];
      }
      return acc;
    },
    [] as PriceBreakDown[]
  );

  const totalPrice = Object.values(bikeSelection || {}).reduce(
    (acc: number, curr) => acc + ((curr as PartType)?.price || 0),
    0
  );

  return { totalPrice, priceBreakDown };
}

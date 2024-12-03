import { PartType } from "@/app/lib/parts/types";
import { useFormContext } from "react-hook-form";
import { useConnect } from "./connect";
import { getCurrentSelectionIds } from "@/app/utils";

type PriceBreakDown = {
  id: string;
  name: string;
  price: number;
  newPrice: number | undefined;
};

export function useLogic() {
  const { watch } = useFormContext();
  const bikeSelection = watch("selections");
  const { priceModifications } = useConnect();

  const getNewPrice = (id?: string) => {
    if (!bikeSelection) {
      return undefined;
    }
    const currentSelection = getCurrentSelectionIds(bikeSelection);

    const modifications = priceModifications.filter((modification) =>
      currentSelection.includes(modification.selectionOf)
    );
    return modifications.find((modification) => modification.modify === id)
      ?.newPrice;
  };

  const priceBreakDown = Object.values(bikeSelection || {}).reduce(
    (acc: PriceBreakDown[], curr) => {
      const part = curr as PartType;
      if (part) {
        return [
          ...acc,
          {
            id: part.id,
            name: part.name,
            price: part.price,
            newPrice: getNewPrice(part.id),
          },
        ];
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

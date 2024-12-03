
import { getAllPriceModifications } from "@/app/lib/priceModifications";

export function useConnect(){
    const priceModifications = getAllPriceModifications();


    return {priceModifications}
}
import { getAllBlockedCombinations } from "@/app/lib/blockedOptions";
import { getAllParts } from "@/app/lib/parts"
import { getAllPartsTypes } from "@/app/lib/partTypes"

export function useConnect(){
    const partsByType = getAllPartsTypes();
    const parts = getAllParts();
    const blockedCombinations = getAllBlockedCombinations();

    return {parts,partsByType, blockedCombinations}
}
import { getAllParts } from "@/app/lib/parts"
import { getAllPartsTypes } from "@/app/lib/partTypes"

export function useConnect(){
    const partsByType = getAllPartsTypes();
    const parts = getAllParts();

    return {parts,partsByType}
}
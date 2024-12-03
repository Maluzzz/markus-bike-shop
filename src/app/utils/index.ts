import { PartType } from "../lib/parts/types";


export function getCurrentSelectionIds(selection: PartType[]){
    return Object.values(selection)
    .map((part) => (part as PartType)?.id)
    .filter(Boolean)
}
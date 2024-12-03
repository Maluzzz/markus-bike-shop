import { PartType } from "../lib/parts/types";


export function getCurrentSelectionIds(selection: PartType[]){

    return Object.values(selection ?? [])
    .map((part) => (part as PartType)?.id)
    .filter(Boolean)
}

export const getDisabledIds = (
    blockedCombinations: string[][],
    selection: string[]
  ): string[] => {
    return blockedCombinations
      .filter(([first, second]) => selection.includes(first) || selection.includes(second))
      .flatMap(([first, second]) =>
        selection.includes(first) ? second : first
      );
  };
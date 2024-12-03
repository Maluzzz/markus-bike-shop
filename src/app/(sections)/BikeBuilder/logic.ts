'use client'
import {  useFormContext,  } from "react-hook-form";
import { useConnect } from "./connect";
import { getCurrentSelectionIds, getDisabledIds } from "@/app/utils";

export function useLogic() {
  const { control, handleSubmit, setValue, watch } = useFormContext();
  const {partsByType,parts,blockedCombinations} = useConnect();
  
  const onSubmit = () => {};

  const bikeSelection = watch("selections");

  const currentSelection = getCurrentSelectionIds(bikeSelection);



  
  const disabledIds = getDisabledIds(blockedCombinations, currentSelection);

  return {
    control,
    handleSubmit,
    setValue,
    selectedParts: bikeSelection,
    onSubmit,
    partsByType,
    parts,
    disabledIds
  };
}
'use client'
import {  useFormContext,  } from "react-hook-form";
import { useConnect } from "./connect";

export function useLogic() {
  const { control, handleSubmit, setValue, watch } = useFormContext();
  const {partsByType,parts} = useConnect();
  
  const onSubmit = () => {};

  const selectedParts = watch("selections");

  return {
    control,
    handleSubmit,
    setValue,
    selectedParts,
    onSubmit,
    partsByType,
    parts
  };
}
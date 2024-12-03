"use client";
import { useLogic } from "./logic";
import { Card } from "@/app/components/Card";
import { ColorPicker } from "@/app/components/ColorPicker";
import { Select } from "@/app/components/Select";
import { PartByTypeType } from "@/app/lib/partTypes/types";
import { Controller } from "react-hook-form";

export default function BikeBuilder() {
  const { control, handleSubmit, setValue, selectedParts, onSubmit, parts, partsByType } =
    useLogic();

  const renderPartTypeForm = (partType: PartByTypeType) => {
     switch (partType.form) {
      case "select":
        return (
          <Controller
            name={`selections.${partType.id}`}
            control={control}
            render={({ field }) => (
              <Select
                label=""
                onChange={field.onChange}
                options={parts.filter((part) => part.part_type === partType.id)}
              />
            )}
          />
        );
    
      case "color_picker":
        return (
          <div className="flex gap-2">
            {parts.filter((part) => part.part_type === partType.id).map((part) => (
              <ColorPicker
                key={part.id}
                color={part.color ?? ""}
                onClick={() => setValue(`selections.${partType.id}`, part)}
                isSelected={
                  selectedParts
                    ? selectedParts[partType.id]?.id === part.id
                    : false
                }
              />
            ))}
          </div>
        );
    
      case "cards":
        return (
          <div className="flex gap-2">
            {parts.filter((part) => part.part_type === partType.id).map((part) => (
              <Card
                key={part.id}
                name={part.name}
                onClick={() => setValue(`selections.${partType.id}`, part)}
                isSelected={
                  selectedParts
                    ? selectedParts[partType.id]?.id === part.id
                    : false
                }
              />
            ))}
          </div>
        );
    
      default:
        return null;
    }
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {partsByType.map((partType) => (
          <div key={partType.id} className="py-3">
            <h1 className="font-semibold text-xl py-4 text-neutral-400">
              {partType.name}
            </h1>
            <div className="flex flex-wrap gap-2">
            {renderPartTypeForm(partType)}
            </div>
          </div>
        ))}

        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg w-full transition duration-300 ease-in-out hover:bg-primary-light"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

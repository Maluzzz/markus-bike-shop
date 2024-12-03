import { z } from "zod";

const PartSchema = z.object({
  id: z.string(), 
  name: z.string(), 
  form: z.enum(["select", "cards", "color_picker"]) 
});

export type PartByTypeType = z.TypeOf<typeof PartSchema>

export const PartsByTypeSchema = z.array(PartSchema);
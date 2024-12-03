import { z } from "zod";

const PartSchema = z.object({
  id: z.string(),
  name: z.string(),
  part_type: z.enum(["frame_type", "frame_finish", "wheel", "rim_color", "chain"]),
  description: z.string(),
  price: z.number(),
  color: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type PartType = z.TypeOf<typeof PartSchema>


export const PartsSchema = z.array(PartSchema);
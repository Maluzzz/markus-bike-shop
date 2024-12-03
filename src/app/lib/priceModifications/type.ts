import { z } from "zod";

export const PriceModificationSchema = z.object({
  selectionOf: z.string().uuid(),
  modify: z.string().uuid(),
  newPrice: z.number().positive(),
});

export const PriceModificationsSchema = z.array(PriceModificationSchema);

export type PriceModification = z.infer<typeof PriceModificationSchema>;
export type PriceModifications = z.infer<typeof PriceModificationsSchema>;
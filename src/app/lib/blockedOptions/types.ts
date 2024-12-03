import { z } from "zod";

export const BlockedCombinationSchema = z.array(z.tuple([z.string().uuid(), z.string().uuid()]));

export type BlockedCombination = z.infer<typeof BlockedCombinationSchema>;
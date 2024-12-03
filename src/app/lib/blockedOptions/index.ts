import { fromZodError } from 'zod-validation-error';
import { BLOCKED_COMBINATIONS } from './mock';
import { BlockedCombinationSchema } from './types';


export  function getAllBlockedCombinations(){

  const parsed = BlockedCombinationSchema.safeParse(BLOCKED_COMBINATIONS);

  if (parsed.success) {
    return parsed.data;
  }

  const err = fromZodError(parsed.error);
  throw new Error(err.toString());
}
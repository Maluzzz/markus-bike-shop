import { fromZodError } from 'zod-validation-error';
import { PARTS } from './mock';
import { PartsSchema } from './types';



export  function getAllParts(){


  const parsed = PartsSchema.safeParse(PARTS);

  if (parsed.success) {
    return parsed.data;
  }

  const err = fromZodError(parsed.error);
  throw new Error(err.toString());
}
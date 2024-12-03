import { fromZodError } from 'zod-validation-error';
import {  PARTS_BY_TYPE } from './mock';
import { PartsByTypeSchema } from './types';



export  function getAllPartsTypes(){

  const parsed = PartsByTypeSchema.safeParse(PARTS_BY_TYPE);

  if (parsed.success) {
    return parsed.data;
  }

  const err = fromZodError(parsed.error);
  throw new Error(err.toString());
}
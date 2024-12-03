import { fromZodError } from 'zod-validation-error';
import { PRICE_MODIFICATIONS } from './mock';
import { PriceModificationsSchema } from './type';



export  function getAllPriceModifications(){

  const parsed = PriceModificationsSchema.safeParse(PRICE_MODIFICATIONS);

  if (parsed.success) {
    return parsed.data;
  }

  const err = fromZodError(parsed.error);
  throw new Error(err.toString());
}
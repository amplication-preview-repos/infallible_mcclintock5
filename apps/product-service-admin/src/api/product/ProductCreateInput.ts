import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  message?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};

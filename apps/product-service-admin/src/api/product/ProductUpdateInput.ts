import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  message?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};


import { ProductItems } from "../Components/Data";
export const addToCart = (item: ProductItems) => {
  return { type: "ADDTOCART", payload: item };
};
export const clearCart = () => {
  return { type: "CLEARCART" };
};

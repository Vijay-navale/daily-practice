import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (buyCount) => {
  console.log("buyCount", buyCount);
  return {
    type: BUY_ICECREAM,
    payload: buyCount,
  };
};

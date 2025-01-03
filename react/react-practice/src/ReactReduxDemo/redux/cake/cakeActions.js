import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  console.log("inside buyCake cakeActions");
  return {
    type: BUY_CAKE,
  };
};

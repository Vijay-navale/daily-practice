import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};
console.log("in cakeReducer");
console.log("initialState:-", initialState);
const cakeReducer = (state = initialState, action) => {
  console.log("deeply in cakeReducer");
  if (action.type === BUY_CAKE) {
    return {
      ...state,
      numOfCakes: state.numOfCakes - 1,
    };
  }
  return state;
};
export default cakeReducer;

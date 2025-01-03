import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numOfIceCreams: 20,
};
const icCreamReducer = (state = initialState, action) => {
  if (action.type === BUY_ICECREAM) {
    return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - action.payload,
    };
  }

  return state;
};

export default icCreamReducer;

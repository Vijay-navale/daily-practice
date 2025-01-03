import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
export const productsReducer = (state = initialState, { type, payload }) => {
  console.log("productsReducer**");

  if (type === ActionTypes.SET_PRODUCTS) {
    return { ...state, products: payload };
  }
  if (type === ActionTypes.FETCH_PRODUCTS) {
    return { ...state, products: payload };
  }

  return state;
};
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log("selectedProductsReducer**");
  if (type === ActionTypes.SELECTED_PRODUCT) {
    return { ...state, ...payload };
  }
  if (type === ActionTypes.REMOVE_SELECTED_PRODUCT) {
    return {};
  }

  return state;
};

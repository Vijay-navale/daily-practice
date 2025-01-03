import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cakeReducer from "./cake/cakeReducer";
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
    // other store enhancers if any
  )
);
console.log("store==>", store);

export default store;

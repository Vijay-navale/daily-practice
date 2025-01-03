import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  if (action.type === FETCH_USERS_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === FETCH_USERS_SUCCESS) {
    return {
      loading: false,
      users: action.payload,
      error: "",
    };
  }
  if (action.type === FETCH_USERS_FAILURE) {
    return {
      loading: false,
      users: [],
      error: action.payload,
    };
  }

  return state;
};
export default userReducer;

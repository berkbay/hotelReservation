import {
  LoginUserAction,
  RegisterUserAction,
  UserAction,
  UserState,
} from "../types";

const INITIAL_STATE = {
  user: {},
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserAction | RegisterUserAction | LoginUserAction,
) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
      };
    default:
      return state;
  }
};

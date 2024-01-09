import { setGlobalLoading } from "../actions/globalLoadingActions";
import { RegisterUserAction, UserAction, UserState } from "../types";

const INITIAL_STATE = {
  user: {},
  error: "",
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserAction | RegisterUserAction,
) => {
  switch (action.type) {
    case "GET_USER_START":
      setGlobalLoading(true);
      return {
        ...state,
        user: {},
        error: "",
      };
    case "GET_USER_SUCCESS":
      setGlobalLoading(false);
      return {
        ...state,
        user: action.payload,
        error: "",
      };
    case "GET_USER_ERROR":
      setGlobalLoading(false);
      return {
        ...state,
        error: "There is a mistake, please try again later",
        user: {},
      };
    case "REGISTER_USER_START":
      setGlobalLoading(true);
      return {
        ...state,
        error: "",
      };
    case "REGISTER_USER_SUCCESS":
      setGlobalLoading(false);
      return {
        ...state,
        error: "",
      };
    case "REGISTER_USER_ERROR":
      setGlobalLoading(false);
      return {
        ...state,
        error: "There is a mistake, please try again later",
      };

    default:
      return state;
  }
};

import { GlobalLoadingAction, GlobalLoadingState } from "../types";

export const globalLoadingReducer = (
  state: GlobalLoadingState = { loading: false },
  action: GlobalLoadingAction,
): GlobalLoadingState => {
  switch (action.type) {
    case "SET_GLOBAL_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

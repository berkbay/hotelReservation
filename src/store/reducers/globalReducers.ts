import {
  GlobalErrorAction,
  GlobalLoadingAction,
  GlobalLoadingState,
  GlobalModalState,
} from "../types";

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

export const globalModalReducer = (
  state: GlobalModalState = { info: "", type: "" },
  action: GlobalErrorAction,
): GlobalModalState => {
  switch (action.type) {
    case "SET_GLOBAL_MODAL":
      return { ...state, info: action.payload.info, type: action.payload.type };

    default:
      return state;
  }
};

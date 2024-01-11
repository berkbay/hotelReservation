import {
  GlobalLoadingAction,
  GlobalModalState,
  GlobalModalAction,
} from "../types";

export const setGlobalLoading = (loading: boolean): GlobalLoadingAction => ({
  type: "SET_GLOBAL_LOADING",
  payload: loading,
});

export const setGlobalModal = (
  payload: GlobalModalState,
): GlobalModalAction => ({
  type: "SET_GLOBAL_MODAL",
  payload,
});

import { GlobalLoadingAction } from "../types";

export const setGlobalLoading = (loading: boolean): GlobalLoadingAction => ({
  type: "SET_GLOBAL_LOADING",
  payload: loading,
});

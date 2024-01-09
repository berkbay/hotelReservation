import { User } from "../screens/AuthFlow/types";

export interface GlobalLoadingState {
  loading: boolean;
}

export interface SetGlobalLoadingAction {
  type: "SET_GLOBAL_LOADING";
  payload: boolean;
}

export type GlobalLoadingAction = SetGlobalLoadingAction;

export interface UserState {
  user: User;
  error: string;
}

export interface GetUserStartAction {
  type: "GET_USER_START";
}

export interface GetUserSuccessAction {
  type: "GET_USER_SUCCESS";
  payload: UserState["user"];
}

export interface GetUserErrorAction {
  type: "GET_USER_ERROR";
  payload: string;
}

export type UserAction =
  | GetUserStartAction
  | GetUserSuccessAction
  | GetUserErrorAction;

interface RegisterUserStartAction {
  type: "REGISTER_USER_START";
}

interface RegisterUserSuccessAction {
  type: "REGISTER_USER_SUCCESS";
  payload: User; // Değişiklik yapılabilir, servisten dönen veriye göre uygun türü kullanın
}

interface RegisterUserErrorAction {
  type: "REGISTER_USER_ERROR";
}

export type RegisterUserAction =
  | RegisterUserStartAction
  | RegisterUserSuccessAction
  | RegisterUserErrorAction;

export interface RootReducerState {
  user: UserState;
  globalLoading: GlobalLoadingState;
}

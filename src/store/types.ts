import { LoginRespnse, User } from "../screens/AuthFlow/types";

export interface GlobalLoadingState {
  loading: boolean;
}

export interface SetGlobalLoadingAction {
  type: "SET_GLOBAL_LOADING";
  payload: boolean;
}

export type GlobalLoadingAction = SetGlobalLoadingAction;

export interface GlobalModalState {
  info?: string | undefined;
  type: string | undefined;
}

export interface SetGlobalModalAction {
  type: "SET_GLOBAL_MODAL";
  payload: GlobalModalState;
}

export type GlobalModalAction = SetGlobalModalAction;

export interface UserState {
  user: User;
}

export interface GetUserSuccessAction {
  type: "GET_USER_SUCCESS";
  payload: UserState["user"];
}

export type UserAction = GetUserSuccessAction;

interface RegisterUserSuccessAction {
  type: "REGISTER_USER_SUCCESS";
}

export type RegisterUserAction = RegisterUserSuccessAction;

interface LoginUserSuccessAction {
  type: "LOGIN_USER_SUCCESS";
  payload: LoginRespnse;
}

export type LoginUserAction = LoginUserSuccessAction;

export interface RootReducerState {
  user: UserState;
  globalLoading: GlobalLoadingState;
  globalModal: GlobalModalState;
}

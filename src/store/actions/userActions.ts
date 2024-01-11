import { ThunkDispatch } from "redux-thunk";

import { setGlobalLoading, setGlobalModal } from "./globalActions";
import { loginService, registerService } from "../../api/auth";
import { User } from "../../screens/AuthFlow/types";
import {
  GlobalModalAction,
  GlobalLoadingAction,
  RegisterUserAction,
  RootReducerState,
  LoginUserAction,
} from "../types";

// export const getUser = (res: User) => async (dispacth: any) => {
//   dispacth({ type: "GET_USER_START" });
//   try {
//     registerService(res).then((res) => {
//       dispacth({
//         type: "GET_USER_SUCCESS",
//         payload: res.data,
//       });
//     });
//   } catch {
//     dispacth({ type: "GET_USER_ERROR" });
//   }
// };

export const loginUser =
  (res: User): any =>
  async (
    dispacth: ThunkDispatch<
      RootReducerState,
      unknown,
      LoginUserAction | GlobalLoadingAction | GlobalModalAction
    >,
  ) => {
    dispacth(setGlobalLoading(true));
    try {
      const response = await loginService(res);
      console.log("LOGIN SUCCESS", response.data);
      // dispacth({ type: "LOGIN_USER_SUCCESS", payload: response });
    } catch (e: any) {
      dispacth(setGlobalModal({ info: e.response.data, type: "error" }));
    } finally {
      dispacth(setGlobalLoading(false));
    }
  };

export const registerUser =
  (res: User): any =>
  async (
    dispacth: ThunkDispatch<
      RootReducerState,
      unknown,
      RegisterUserAction | GlobalLoadingAction | GlobalModalAction
    >,
  ) => {
    dispacth(setGlobalLoading(true));
    try {
      const response = await registerService(res);
      dispacth({
        type: "REGISTER_USER_SUCCESS",
      });
      dispacth(setGlobalModal({ info: response.data, type: "success" }));
    } catch (e: any) {
      dispacth(setGlobalModal({ info: e.response.data, type: "error" }));
    } finally {
      dispacth(setGlobalLoading(false));
    }
  };

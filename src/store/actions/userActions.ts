import { ThunkDispatch } from "redux-thunk";

import { setGlobalLoading } from "./globalLoadingActions";
import { registerService } from "../../api/auth";
import { User } from "../../screens/AuthFlow/types";
import {
  GlobalLoadingAction,
  RegisterUserAction,
  RootReducerState,
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

export const registerUser =
  (res: User): any =>
  async (
    dispacth: ThunkDispatch<
      RootReducerState,
      unknown,
      RegisterUserAction | GlobalLoadingAction
    >,
  ) => {
    dispacth(setGlobalLoading(true));
    dispacth({ type: "REGISTER_USER_START" });
    try {
      const response = await registerService(res);
      dispacth({
        type: "REGISTER_USER_SUCCESS",
        payload: response.data,
      });
    } catch {
      dispacth({ type: "REGISTER_USER_ERROR" });
    } finally {
      dispacth(setGlobalLoading(false));
    }
  };

import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import {
  globalModalReducer,
  globalLoadingReducer,
} from "./reducers/globalReducers";
import { userReducer } from "./reducers/userReducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  globalLoading: globalLoadingReducer,
  globalModal: globalModalReducer,
});

export default rootReducer;

// noinspection JSDeprecatedSymbols

import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { thunk, ThunkMiddleware } from "redux-thunk";

import Loader from "./src/components/Loader";
import Router from "./src/navigations/Router";
import rootReducer from "./src/store";

const store: any = createStore(
  rootReducer as any,
  applyMiddleware(thunk as any),
);
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Loader />
        <Router />
      </PersistGate>
    </Provider>
  );
}

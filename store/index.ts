import React from "react";
import App from "../App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { User } from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
};

export interface AppState {
  user: CurrentUserState;
  data: {
    allUsers: User[];
  };
}

const Reducer = combineReducers<AppState>({});

const persistedReducer = persistReducer(persistConfig, Reducer);
//store
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

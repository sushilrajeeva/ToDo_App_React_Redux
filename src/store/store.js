import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../reducers/todo/todoSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

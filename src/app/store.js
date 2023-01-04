import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feartures/Todo/TodoSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

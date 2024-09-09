import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../action/studentSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  devTools: true,
});
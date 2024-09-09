import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../initialState";

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});
export default tableSlice.reducer;

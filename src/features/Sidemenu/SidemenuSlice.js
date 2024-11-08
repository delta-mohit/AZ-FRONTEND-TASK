import { createSlice } from "@reduxjs/toolkit";
import { SIDEMENU } from "../../../constants";

const initialState = SIDEMENU.LARGE;

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    setLarge: () => {
      return SIDEMENU.LARGE;
    },
    setSmall: () => {
      return SIDEMENU.SMALL;
    },
  },
});

export const sideMenuActions = sideMenuSlice.actions;
export default sideMenuSlice.reducer;

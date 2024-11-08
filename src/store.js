import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./features/Sidemenu/SidemenuSlice";

export const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showMenu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    hideMenu: (state) => {
      state.showMenu = false;
    },
  },
});

export const { toggleMenu, hideMenu } = appSlice.actions;
export default appSlice.reducer;

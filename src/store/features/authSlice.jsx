import { createSlice } from "@reduxjs/toolkit";
import { fetchLocalStorage } from "../../Helper/util"; // Import your local storage fetch function

const authSlice = createSlice({
  name: "auth",
  initialState: { profile: {} },
  reducers: {
    login(state, action) {
      state.profile = action.payload;
    },
    logout(state) {
      state.profile = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

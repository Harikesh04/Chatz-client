import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { profile: {},isAuthenticated: false},
  reducers: {
    login(state, action) {
      state.profile = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.profile = {};
      state.isAuthenticated = false;
    },
    
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

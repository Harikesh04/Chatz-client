// roomSlice.js
import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "rooms",
  initialState: { public: [], private: [] },
  reducers: {},
  setPublicRooms(state, action) {
    state.public = action.payload;
  },
  setPrivateRooms(state, action) {
    state.private = action.payload;
  },
  addPublicRoom(state, action) {
    state.public.push(action.payload);
  },
  addPrivateRoom(state, action) {
    state.private.push(action.payload);
  },
});

export const {
  setPublicRooms,
  addPublicRoom,
  addPrivateRoom,
  setPrivateRooms,
} = roomSlice.actions;
export default roomSlice.reducer;

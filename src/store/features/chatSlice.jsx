import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    default: (state) => {
      return {
        ...state,
      };
    },
    messageSent(state, action) {
      // Handle adding a sent message to state
      const { message, roomid } = action.payload;
      const newMessage = {
        type: "sent",
        data: {
          message,
          roomid,
        },
      };
      state.messages = [...state.messages, newMessage];
    },
    messageReceived(state, action) {
      // Handle adding a received message to state
      const { message, roomid, user } = action.payload;
      const newMessage = {
        type: "recieved",
        data: {
          message,
          roomid,
          user,
        },
      };
      state.messages = [...state.messages, newMessage];
    },
    noticeReceived(state, action) {
      // Handle adding a notice to state
      const { message, roomid, user } = action.payload;
      const newMessage = {
        type: "notice",
        data: {
          message,
          roomid,
          user,
        },
      };
      state.messages = [...state.messages, newMessage];
    },
  },
});

export const { messageSent, messageReceived, noticeReceived } =
  chatSlice.actions;
export default chatSlice.reducer;

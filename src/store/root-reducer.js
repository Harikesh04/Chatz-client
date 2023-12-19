import { combineReducers } from "redux";
import authSlice from "./features/authSlice";
import chatSlice from "./features/chatSlice";
import roomSlice from "./features/roomSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  chat: chatSlice,
  rooms: roomSlice,
});

export default rootReducer;

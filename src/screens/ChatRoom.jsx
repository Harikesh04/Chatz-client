import { useEffect, useMemo, useState } from "react";
import Wrapper from "../Components/layouts/Wrapper";
import Header from "../Components/section/Header";
import TextInput from "../Components/ui/TextInput";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import socketio from "socket.io-client";
import {
  messageReceived,
  messageSent,
  noticeReceived,
} from "../store/features/chatSlice";
import ChattingArea from "../screens/ChattingArea.jsx";
import { API_DEV_HOST } from "../api-handlers/endpoints.js";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.auth);
  const [inputMsg, setInputMsg] = useState("");
  const [socket, setSocket] = useState();

  const roomid = useMemo(() => params.id, []);

  useEffect(() => {
    const socketTEMP = socketio(API_DEV_HOST);
    setSocket(socketTEMP);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("create", { room: roomid, name: user.profile.givenName });
      socket.on("user-joined", (name) => {
        const message = `${name} Joined`;
        dispatch(
          noticeReceived({ message: message, roomid: roomid, user: name }),
        );
      });
      socket.on("toClient", ({ name, message }) => {
        dispatch(
          messageReceived({ message: message, roomid: roomid, user: name }),
        );
      });
      socket.on("user-left", (name) => {
        const message = `${name} Left`;
        dispatch(
          noticeReceived({ message: message, roomid: roomid, user: name }),
        );
      });

      return function cleanup() {
        socket.close();
      };
    }
  }, [socket]);

  const HandleSendMessage = (e) => {
    if (e.key !== "Enter" && e.type !== "click") return;
    if (!inputMsg) return;

    dispatch(messageSent({ message: inputMsg, roomid }));
    socket.emit("toServer", {
      room: roomid,
      name: user.profile.name,
      message: inputMsg,
    });
    setInputMsg("");
  };

  return (
    <Wrapper className="bg-white">
      <Header />
      <ChattingArea roomid={roomid} />
      <TextInput
        value={inputMsg}
        setValue={setInputMsg}
        placeholder="Enter Your Message Here"
        type="message"
        sendMessage={HandleSendMessage}
      ></TextInput>
    </Wrapper>
  );
};

export default ChatRoom;

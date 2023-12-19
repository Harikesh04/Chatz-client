import Chat from "../components/ui/Chat";
import { useRef } from "react";

import { useSelector } from "react-redux";

export default function ChattingArea({ roomid }) {
  const chats = useSelector((state) => state.chat.messages);

  const chatRef = useRef();

  const renderChats = () => {
    console.log(chats);
    return chats.map((msg, index) => {
      if (msg.data.roomid !== roomid) return null;
      if (msg.type === "recieved") {
        return (
          <Chat
            type={msg.type}
            key={`${msg.data.roomid}${index}`}
            user={msg.data.user}
          >
            {msg.data.message}
          </Chat>
        );
      } else {
        return (
          <Chat key={`${msg.data.roomid}${index}`} type={msg.type}>
            {msg.data.message}
          </Chat>
        );
      }
    });
  };

  return (
    <div
      ref={chatRef}
      style={{
        backgroundImage:
          "linear-gradient(to right bottom,rgb(0,0,0),rgba(0,0,0,0.4)),url('/assets/chat-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
      className="w-full px-2 py-2 space-y-2 overflow-y-auto h-4/5 scrollbar-hide "
    >
      {renderChats()}
    </div>
  );
}

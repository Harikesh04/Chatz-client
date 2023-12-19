import React from "react";
import Typography from "../ui/Typography";
import RoomGateBox from "./RoomGateBox.jsx";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full py-2 border-t-2 border-gray-100 md:w-6/12 md:-ml-2 lg:w-3/12">
      <RoomGateBox />
      <Typography className="font-medium text-center text-gray-500">
        Chatzz © {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

export default Footer;

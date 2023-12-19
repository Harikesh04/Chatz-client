import React from "react";
import Wrapper from "../Components/layouts/Wrapper";
import Header from "../Components/section/Header.jsx";
import Footer from "../Components/section/Footer.jsx";
import Secret from "../Components/section/Secret.jsx";
import Public from "../Components/section/Public.jsx";
import Typography from "../Components/ui/Typography";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userProfile = useSelector((state) => state.auth.profile);

  
  return (
    <Wrapper className="relative px-2 bg-white ">
      <Header />
      <Typography type="caption" className="mt-4">
        Hello{" "}
        <span className="font-bold text-gray-700">{userProfile?.name}</span> ,
        You Have Entered the best secure chatting app in the Entire World.
      </Typography>
      <Secret />
      <Public />
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;

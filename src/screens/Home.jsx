import React, { useEffect } from "react";
import Wrapper from "../Components/layouts/Wrapper.jsx";
import SwiperSection from "../Components/Swiper/SwiperSection.jsx";
import Button from "../Components/ui/Button.jsx";
import GoogleOAuth from "../Helper/GoogleOAuth.jsx";
import { homeData } from "../dummy/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center h-full px-2 bg-gray-100">
        <SwiperSection data={homeData} />

        <div className="flex flex-col items-center justify-center mt-10 space-y-2">
          <Link to="/dashboard">
            <Button btnType="primary">Welcome to the Chat</Button>
          </Link>
          <GoogleOAuth className="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

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
    <Wrapper className="relative px-2 h-full w-full bg-white ">
      <Header />
      <Typography type="caption" className="mt-4 2xl:text-lg">
        Hello{" "}
        <span className="font-bold  text-gray-700">{userProfile?.name}</span> ,
        You Have Entered the best secure chatting app in the Entire World.
      </Typography>

      <div className="h-[70vh] flex gap-5   flex-col ">
        <Secret />
        <Public />
      </div>

      <Footer />
    </Wrapper>
  );
};

export default Dashboard;

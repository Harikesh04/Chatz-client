import Button from "../ui/Button";
import Typography from "../ui/Typography";
import { logout } from "../../store/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.removeItem("googleLogin");
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-between px-2 py-2 border-b-2 border-gray-100">
        {/* <Toaster type='failure' /> */}
        <Typography type="secondary">
          Chatzz <span className="text-sm">v2.0</span>
        </Typography>
        <Button onClick={HandleLogout} btnType="secondary">
          Logout
        </Button>
      </div>
    </>
  );
};

export default Header;

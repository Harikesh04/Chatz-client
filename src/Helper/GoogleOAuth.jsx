import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Components/ui/Button";
import { login } from "../store/features/authSlice";

export default function GoogleOAuth({ ...props }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const clientId =
    "603099181580-6pg13h8qck4s0umn0efcjlj8u3leeomq.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  const SuccessLoginHandler = (res) => {
    localStorage.setItem("googleLogin", JSON.stringify(res.profileObj));
    const profile = { ...res.profileObj };

    dispatch(login(profile));

    navigate("/dashboard");
  };
  const FailureLoginHandler = (err) => {
    console.log(err);
  };
  return (
    <div {...props}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In Using Google"
        render={(renderProps) => {
          return (
            <Button onClick={renderProps.onClick} btnType="primary" {...props}>
              Sign In Using Google
            </Button>
          );
        }}
        onSuccess={SuccessLoginHandler}
        onFailure={FailureLoginHandler}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

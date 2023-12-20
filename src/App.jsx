import { useEffect, useState } from "react";
import RouterComponent from "./routers/RouterComponent.jsx";
import { useDispatch } from "react-redux";
import { fetchLocalStorage } from "./Helper/util.jsx";
import { login } from "./store/features/authSlice.jsx";
import Spinner from "./Components/ui/Spinner.jsx";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = fetchLocalStorage();
    const googleId = user?.googleId;

    if (googleId) {
      dispatch(login(user));
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <RouterComponent />
      )}
    </>
  );
}

export default App;

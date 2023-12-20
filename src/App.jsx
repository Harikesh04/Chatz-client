import { useEffect, useState } from "react";
import RouterComponent from "./routers/RouterComponent.jsx";
import { useDispatch } from "react-redux";
import { fetchLocalStorage } from "./Helper/util.jsx";
import { login } from "./store/features/authSlice.jsx";
import Spinner from "./Components/ui/Spinner.jsx";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = fetchLocalStorage();
    setIsAuthenticated(Boolean(user?.googleId));
    dispatch(login(user));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <RouterComponent isAuthenticated={isAuthenticated} />
      )}
    </>
  );
}

export default App;

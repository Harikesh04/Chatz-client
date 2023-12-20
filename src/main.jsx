import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";

import store from "./store/store.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </>,
);

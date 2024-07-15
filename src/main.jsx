// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import App from "./App";

const Main = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? <Home /> : <LoginForm />;
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="738541741916-vad58hqlqrs7n6q9e90cnl4u8b1k33kv.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);

      
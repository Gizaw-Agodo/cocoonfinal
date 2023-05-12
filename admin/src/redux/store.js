import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./productRedux";
import userReducer from "./authRedux";
export default configureStore({
  reducer: {
    user: userReducer,
    product:productReducer
  },
});

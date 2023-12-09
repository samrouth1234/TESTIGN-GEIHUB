import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./feature/auth/authSlice";
import anonymousSlice from "./feature/anonymous/anonymousSlice";
const store = configureStore({
  reducer: {
    user: authSlice,
    anonymous: anonymousSlice,
  },
});

export default store;

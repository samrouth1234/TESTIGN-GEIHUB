import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isFromForgetPw: false,
  codeVerifyForget: "",
};
const anonymousSlice = createSlice({
  name: "anonymous",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setIsFormForgetPw: (state, action) => {
      state.isFromForgetPw = action.payload;
    },
    setCodeVerifyForget: (state, action) => {
      state.codeVerifyForget = action.payload;
    },
  },
});

export const { setEmail, setIsFormForgetPw, setCodeVerifyForget } =
  anonymousSlice.actions;

export default anonymousSlice.reducer;
export const selectEmail = (state) => state?.anonymous.email;
export const selectIsFromForgetPw = (state) => state?.anonymous.isFromForgetPw;
export const selectCodeVerifyForget = (state) =>
  state?.anonymous.codeVerifyForget;

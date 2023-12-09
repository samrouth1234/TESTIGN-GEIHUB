import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loadings: false,
  error: "",
};

export const signUpuser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpuser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpuser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpuser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default authSlice.reducer;

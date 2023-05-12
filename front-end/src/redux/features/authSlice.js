import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    logInStart: (state) => {
      state.isFetching = true;
    },
    logInSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    logInFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    signUpStart: (state) => {
      state.isFetching = true;
    },
    signUpSuccess: (state) => {
      state.isFetching = false;
    },
    signUpFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const {
  logInFailure,
  logInSuccess,
  logInStart,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} = userSlice.actions;
export default userSlice.reducer;

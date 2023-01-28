import { createSlice } from "@reduxjs/toolkit";
import { Status } from "common/types";
import { AuthState } from "./types";
import authActions from "./actions";

const initialState: AuthState = {
  status: Status.none,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authActions.login.pending, (state) => {
        state.status = Status.pending;
      })
      .addCase(authActions.login.fulfilled, (state, { payload }) => {
        state.status = Status.success;
        state.loggedIn = payload;
      })
      .addCase(authActions.login.rejected, (state) => {
        state.status = Status.error;
        state.loggedIn = false;
      });
  },
});

export default authSlice.reducer;

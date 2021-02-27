import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import jwt from "jsonwebtoken";

const slice = createSlice({
  name: "user",
  initialState: { profile: {} },
  reducers: {
    userRequested: (user, action) => {
      user.loading = true;
    },
    userReceived: (user, action) => {
      user.profile = action.payload;
      user.loading = false;
    },
    userRequestFailed: (user, action) => {
      user.loading = false;
    },
    authStart: (user, action) => {
      user.loggedIn = false;
      user.status = { message: "logging in", color: "blue" };
    },
    authSuccess: (user, action) => {
      user.loggedIn = true;
      user.profile = action.payload.user;
      user.status = { message: "login successful", color: "green" };
      localStorage.setItem("authToken", action.payload.token); 
    },
    authFailed: (user, action) => {
      user.loggedIn = false;
      user.error = action.payload;
      user.status = { message: "login failed", color: "red" };
    },
    authRemoved: (user, action) => {
      user.loggedIn = false;
      localStorage.removeItem("authToken");
      user.profile = {};
    },
  },
});

export const {
  userRequested,
  userReceived,
  userRequestFailed,
  authStart,
  authSuccess,
  authFailed,
  authRemoved,
} = slice.actions;

export default slice.reducer;

export const logUserIn = (email, password) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "users/login",
      method: "post",
      data: { email, password },
      onStart: authStart.type,
      onSuccess: authSuccess.type,
      onError: authFailed.type,
    })
  );
};
export const logUserOut = () => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "users/logout",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      onSuccess: authRemoved.type,
    })
  );
};

export const loadLoggedInUser = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/users/me",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      onStart: userRequested.type,
      onSuccess: userReceived.type,
      onError: userRequestFailed.type,
    })
  );
};

export const getLoggedInUser = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    var decoded = jwt.verify(token, "thisismyjsonsignature");
    return decoded.user;
  }
  return null;
};

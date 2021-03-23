import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "liveNows",
  initialState: { list: [], liveNow: {} },
  reducers: {
    liveNowsRequested: (liveNows, action) => {
      liveNows.loading = true;
    },
    liveNowsReceived: (liveNows, action) => {
      liveNows.list = action.payload;
      liveNows.loading = false;
    },
    liveNowsRequestFailed: (liveNows, action) => {
      liveNows.loading = false;
    },
    liveNowRequested: (liveNows, action) => {
      liveNows.loading = true;
    },
    liveNowReceived: (liveNows, action) => {
      liveNows.liveNow = action.payload;
      liveNows.loading = false;
    },
    liveNowRequestFailed: (liveNows, action) => {
      liveNows.loading = false;
    },
    liveNowAddStart: (liveNows, action) => {
      liveNows.loading = true;
      liveNows.status = "loading";
    },
    liveNowAdded: (liveNows, action) => {
      liveNows.list.push(action.payload);
      liveNows.loading = false;
      liveNows.status = "Added successfully";
      window.location.reload();
    },
    liveNowAddFailed: (liveNows, action) => {
      liveNows.loading = false;
      liveNows.status = "Failed";
    },
    liveNowRemoved: (liveNows, action) => {
      liveNows.list.pop((liveNow) => liveNow._id !== action.payload._id);
      window.location.reload();
    },
  },
});

export const {
  liveNowAdded,
  liveNowsRequested,
  liveNowsReceived,
  liveNowsRequestFailed,
  liveNowRequested,
  liveNowReceived,
  liveNowRequestFailed,
  liveNowAddStart,
  liveNowAddFailed,
  liveNowRemoved,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadliveNows = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/liveNows",
      // params: params,
      onStart: liveNowsRequested.type,
      onSuccess: liveNowsReceived.type,
      onError: liveNowsRequestFailed.type,
    })
  );
};

export const loadliveNow = (liveNowId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/liveNows/${liveNowId}`,
      // params: params,
      onStart: liveNowRequested.type,
      onSuccess: liveNowReceived.type,
      onError: liveNowRequestFailed.type,
    })
  );
};

export const addliveNow = (liveNow) =>
  apiCallBegan({
    url: "/liveNows",
    method: "post",
    data: liveNow,
    onStart: liveNowAddStart.type,
    onSuccess: liveNowAdded.type,
    onError: liveNowAddFailed.type,
  });

export const removeliveNow = (id) =>
  apiCallBegan({
    url: `/liveNows/${id}`,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: liveNowRemoved.type,
  });

export const liveNows = (state) => state.app.liveNows.list;
export const liveNow = (state) => state.app.liveNows.liveNow;
export const liveNowStatus = (state) => state.app.liveNows.status;
export const loadingliveNow = (state) => state.app.liveNows.loading;

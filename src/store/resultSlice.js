import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "results",
  initialState: { list: [], result: {} },
  reducers: {
    resultsRequested: (results, action) => {
      results.loading = true;
    },
    resultsReceived: (results, action) => {
      results.list = action.payload;
      results.loading = false;
    },
    resultsRequestFailed: (results, action) => {
      results.loading = false;
    },
    resultRequested: (results, action) => {
      results.loading = true;
    },
    resultReceived: (results, action) => {
      results.result = action.payload;
      results.loading = false;
    },
    resultRequestFailed: (results, action) => {
      results.loading = false;
    },
    resultAddStart: (results, action) => {
      results.loading = true;
      results.status = "loading";
    },
    resultAdded: (results, action) => {
      results.list.push(action.payload);
      results.loading = false;
      results.status = "Added successfully";
      window.location.reload();
    },
    resultUpdated: (results, action) => {
      const index = results.list.findIndex(
        (result) => result._id === action.payload._id
      );
      results.list[index].image = action.payload.image;

      results.loading = false;
      results.status = "Updated successfully";
      window.location.reload();
    },
    resultAddFailed: (results, action) => {
      results.loading = false;
      results.status = "Failed";
    },
    resultRemoved: (results, action) => {
      results.list.pop((result) => result._id !== action.payload._id);
      window.location.reload();
    },
  },
});

export const {
  resultAdded,
  resultsRequested,
  resultsReceived,
  resultsRequestFailed,
  resultRequested,
  resultReceived,
  resultRequestFailed,
  resultAddStart,
  resultAddFailed,
  resultRemoved,
  resultUpdated,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadresults = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/results",
      // params: params,
      onStart: resultsRequested.type,
      onSuccess: resultsReceived.type,
      onError: resultsRequestFailed.type,
    })
  );
};

export const loadresult = (resultId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/results/${resultId}`,
      // params: params,
      onStart: resultRequested.type,
      onSuccess: resultReceived.type,
      onError: resultRequestFailed.type,
    })
  );
};

export const addresult = (result) =>
  apiCallBegan({
    url: "/results",
    method: "post",
    data: result,
    onStart: resultAddStart.type,
    onSuccess: resultAdded.type,
    onError: resultAddFailed.type,
  });

export const updateresult = (id, result) =>
  apiCallBegan({
    url: `/results/${id}`,
    method: "patch",
    data: result,
    onStart: resultAddStart.type,
    onSuccess: resultUpdated.type,
    onError: resultAddFailed.type,
  });

export const removeresult = (id) =>
  apiCallBegan({
    url: `/results/${id}`,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: resultRemoved.type,
  });

export const results = (state) => state.app.results.list;
export const result = (state) => state.app.results.result;
export const resultStatus = (state) => state.app.results.status;
export const loadingresult = (state) => state.app.results.loading;

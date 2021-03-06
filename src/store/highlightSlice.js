import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "highlights",
  initialState: { list: [], highlight: {} },
  reducers: {
    highlightsRequested: (highlights, action) => {
      highlights.loading = true;
    },
    highlightsReceived: (highlights, action) => {
      highlights.list = action.payload;
      highlights.loading = false;
    },
    highlightsRequestFailed: (highlights, action) => {
      highlights.loading = false;
    },
    highlightRequested: (highlights, action) => {
      highlights.loading = true;
    },
    highlightReceived: (highlights, action) => {
      highlights.highlight = action.payload;
      highlights.loading = false;
    },
    highlightRequestFailed: (highlights, action) => {
      highlights.loading = false;
    },
    highlightAddStart: (highlights, action) => {
      highlights.loading = true;
      highlights.status = "loading";
    },
    highlightAdded: (highlights, action) => {
      highlights.list.push(action.payload);
      highlights.loading = false;
      highlights.status = "Added successfully";
      window.location.reload();
    },
    highlightUpdated: (highlights, action) => {
      const index = highlights.list.findIndex(
        (highlight) => highlight._id === action.payload._id
      );
      highlights.list[index].link = action.payload.link;
      highlights.list[index].title = action.payload.title;

      highlights.loading = false;
      highlights.status = "Updated successfully";
      window.location.reload();
    },
    highlightAddFailed: (highlights, action) => {
      highlights.loading = false;
      highlights.status = "Failed";
    },
    highlightRemoved: (highlights, action) => {
      highlights.list.pop((highlight) => highlight._id !== action.payload._id);
      window.location.reload();
    },
  },
});

export const {
  highlightAdded,
  highlightsRequested,
  highlightsReceived,
  highlightsRequestFailed,
  highlightRequested,
  highlightReceived,
  highlightRequestFailed,
  highlightAddStart,
  highlightAddFailed,
  highlightRemoved,
  highlightUpdated,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadhighlights = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/highlights",
      // params: params,
      onStart: highlightsRequested.type,
      onSuccess: highlightsReceived.type,
      onError: highlightsRequestFailed.type,
    })
  );
};

export const loadhighlight = (highlightId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/highlights/${highlightId}`,
      // params: params,
      onStart: highlightRequested.type,
      onSuccess: highlightReceived.type,
      onError: highlightRequestFailed.type,
    })
  );
};

export const addhighlight = (highlight) =>
  apiCallBegan({
    url: "/highlights",
    method: "post",
    data: highlight,
    onStart: highlightAddStart.type,
    onSuccess: highlightAdded.type,
    onError: highlightAddFailed.type,
  });

export const updatehighlight = (id, highlight) =>
  apiCallBegan({
    url: `/highlights/${id}`,
    method: "patch",
    data: highlight,
    onStart: highlightAddStart.type,
    onSuccess: highlightUpdated.type,
    onError: highlightAddFailed.type,
  });

export const removehighlight = (id) =>
  apiCallBegan({
    url: `/highlights/${id}`,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: highlightRemoved.type,
  });

export const highlights = (state) => state.app.highlights.list;
export const highlight = (state) => state.app.highlights.highlight;
export const highlightStatus = (state) => state.app.highlights.status;
export const loadingHighlight = (state) => state.app.highlights.loading;

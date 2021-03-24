import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "slides",
  initialState: { list: [], slide: {} },
  reducers: {
    slidesRequested: (slides, action) => {
      slides.loading = true;
    },
    slidesReceived: (slides, action) => {
      slides.list = action.payload;
      slides.loading = false;
    },
    slidesRequestFailed: (slides, action) => {
      slides.loading = false;
    },
    slideRequested: (slides, action) => {
      slides.loading = true;
    },
    slideReceived: (slides, action) => {
      slides.slide = action.payload;
      slides.loading = false;
    },
    slideRequestFailed: (slides, action) => {
      slides.loading = false;
    },
    slideAddStart: (slides, action) => {
      slides.loading = true;
      slides.status = "loading";
    },
    slideAdded: (slides, action) => {
      slides.list.push(action.payload);
      slides.loading = false;
      slides.status = "Added successfully";
      window.location.reload();
    },
    slideUpdated: (slides, action) => {
      const index = slides.list.findIndex(
        (slide) => slide._id === action.payload._id
      );
      slides.list[index].image = action.payload.image;
      slides.list[index].tournament = action.payload.tournament;

      slides.loading = false;
      slides.status = "Updated successfully";
      window.location.reload();
    },
    slideAddFailed: (slides, action) => {
      slides.loading = false;
      slides.status = "Failed";
    },
    slideRemoved: (slides, action) => {
      slides.list.pop((slide) => slide._id !== action.payload._id);
      window.location.reload();
    },
  },
});

export const {
  slideAdded,
  slidesRequested,
  slidesReceived,
  slidesRequestFailed,
  slideRequested,
  slideReceived,
  slideRequestFailed,
  slideAddStart,
  slideAddFailed,
  slideRemoved,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadslides = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/slides",
      // params: params,
      onStart: slidesRequested.type,
      onSuccess: slidesReceived.type,
      onError: slidesRequestFailed.type,
    })
  );
};

export const loadslide = (slideId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/slides/${slideId}`,
      // params: params,
      onStart: slideRequested.type,
      onSuccess: slideReceived.type,
      onError: slideRequestFailed.type,
    })
  );
};

export const addslide = (slide) =>
  apiCallBegan({
    url: "/slides",
    method: "post",
    data: slide,
    onStart: slideAddStart.type,
    onSuccess: slideAdded.type,
    onError: slideAddFailed.type,
  });

export const updateSlide = (id, slide) =>
  apiCallBegan({
    url: `/slides/${id}`,
    method: "patch",
    data: slide,
    onStart: slideAddStart.type,
    onSuccess: slideAdded.type,
    onError: slideAddFailed.type,
  });

export const removeslide = (id) =>
  apiCallBegan({
    url: `/slides/${id}`,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: slideRemoved.type,
  });

export const slides = (state) => state.app.slides.list;
export const slide = (state) => state.app.slides.slide;
export const slideStatus = (state) => state.app.slides.status;
export const loadingslide = (state) => state.app.slides.loading;

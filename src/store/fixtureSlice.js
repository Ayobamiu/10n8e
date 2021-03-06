import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "fixtures",
  initialState: { list: [], loading: false, fixture: { loading: false } },
  reducers: {
    fixturesRequested: (fixtures, action) => {
      fixtures.loading = true;
    },
    fixturesReceived: (fixtures, action) => {
      fixtures.list = action.payload;
      fixtures.loading = false;
    },
    fixturesRequestFailed: (fixtures, action) => {
      fixtures.loading = false;
    },
    fixtureRequested: (fixtures, action) => {
      // fixtures.fixture.loading = true;
    },
    fixtureReceived: (fixtures, action) => {
      fixtures.fixture = action.payload;
      // fixtures.fixture.loading = false;
    },
    fixtureRequestFailed: (fixtures, action) => {
      // fixtures.fixture.loading = false;
    },
    fixtureAddStart: (fixtures, action) => {
      fixtures.loading = true;
      fixtures.status = "Adding tournament";
    },
    fixtureUpdateStart: (fixtures, action) => {
      fixtures.loading = true;
      fixtures.status = "Updating tournament";
    },
    fixtureAdded: (fixtures, action) => {
      fixtures.list.push(action.payload);
      fixtures.loading = false;
      fixtures.status = "Added successfully";
    },
    fixtureUpdated: (fixtures, action) => {
      const index = fixtures.list.findIndex(
        (fixture) => fixture._id === action.payload._id
      );
      // fixtures.list[index].link = action.payload.link;

      fixtures.loading = false;
      fixtures.status = "Updated successfully";
      window.location.reload();
    },
    fixtureAddFailed: (fixtures, action) => {
      fixtures.loading = false;
      fixtures.status = "Failed";
    },
    fixtureRemoved: (fixtures, action) => {
      fixtures.list.pop((fixture) => fixture._id !== action.payload._id);
    },
  },
});

export const {
  fixtureAdded,
  fixturesRequested,
  fixturesReceived,
  fixturesRequestFailed,
  fixtureRequested,
  fixtureReceived,
  fixtureRequestFailed,
  fixtureAddStart,
  fixtureAddFailed,
  fixtureRemoved,
  fixtureUpdated,
  fixtureUpdateStart,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadfixtures = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/fixtures",
      // params: params,
      onStart: fixturesRequested.type,
      onSuccess: fixturesReceived.type,
      onError: fixturesRequestFailed.type,
    })
  );
};

export const loadfixture = (fixtureId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/fixtures/${fixtureId}`,
      // params: params,
      onStart: fixtureRequested.type,
      onSuccess: fixtureReceived.type,
      onError: fixtureRequestFailed.type,
    })
  );
};

export const loadfixtureWithSlug = (fixtureId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/fixtures/${fixtureId}/by-slug`,
      // params: params,
      onStart: fixtureRequested.type,
      onSuccess: fixtureReceived.type,
      onError: fixtureRequestFailed.type,
    })
  );
};

export const addfixture = (fixture) =>
  apiCallBegan({
    url: "/fixtures",
    method: "post",
    data: fixture,
    onStart: fixtureAddStart.type,
    onSuccess: fixtureAdded.type,
    onError: fixtureAddFailed.type,
  });

export const updatefixture = (id, fixture) =>
  apiCallBegan({
    url: `/fixtures/${id}`,
    method: "patch",
    data: fixture,
    onStart: fixtureUpdateStart.type,
    onSuccess: fixtureAdded.type,
    onError: fixtureAddFailed.type,
  });

export const addImageToFixture = (id, imageData) =>
  apiCallBegan({
    url: `/fixtures/${id}/add-photo`,
    method: "patch",
    data: imageData,
    onStart: fixtureUpdateStart.type,
    onSuccess: fixtureUpdated.type,
    onError: fixtureAddFailed.type,
  });

export const addParticipantImageToFixture = (id, imageData) =>
  apiCallBegan({
    url: `/fixtures/${id}/add-participant`,
    method: "patch",
    data: imageData,
    onStart: fixtureUpdateStart.type,
    onSuccess: fixtureUpdated.type,
    onError: fixtureAddFailed.type,
  });

export const addDocToFixture = (id, docData) =>
  apiCallBegan({
    url: `/fixtures/${id}/add-doc-link`,
    method: "patch",
    data: docData,
    onStart: fixtureUpdateStart.type,
    onSuccess: fixtureUpdated.type,
    onError: fixtureAddFailed.type,
  });

export const removeDocFromFixture = (id, docId) =>
  apiCallBegan({
    url: `/fixtures/${id}/${docId}`,
    method: "delete",
    onStart: fixtureUpdateStart.type,
    onSuccess: fixtureUpdated.type,
    onError: fixtureAddFailed.type,
  });

export const removeParticipantImageFromFixture = (id, participantId) =>
  apiCallBegan({
    url: `/fixtures/${id}/${participantId}/delete-participant`,
    method: "delete",
    onStart: fixtureUpdateStart.type,
    onSuccess: fixtureUpdated.type,
    onError: fixtureAddFailed.type,
  });

export const removeImageFromFixture = (id, imageData) =>
  apiCallBegan({
    url: `/fixtures/${id}/delete-photo`,
    method: "delete",
    data: imageData,
    onStart: fixtureAddStart.type,
    onSuccess: fixtureUpdated.type,
    onError: fixtureAddFailed.type,
  });

export const removefixture = (id) =>
  apiCallBegan({
    url: "/fixtures/" + id,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: fixtureRemoved.type,
  });

export const fixtures = (state) => state.app.fixtures.list;
export const fixture = (state) => state.app.fixtures.fixture;
export const loadingFixtures = (state) => state.app.fixtures.loading;
export const loadingFixtureStatus = (state) => state.app.fixtures.status;
export const loadingFixture = (state) => state.app.fixtures.fixture.loading;

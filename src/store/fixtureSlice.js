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
    fixtureAdded: (fixtures, action) => {
      fixtures.list.push(action.payload);
      fixtures.loading = false;
      fixtures.status = "Added successfully";
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

export const addfixture = (fixture) =>
  apiCallBegan({
    url: "/fixtures",
    method: "post",
    data: fixture,
    onStart: fixtureAddStart.type,
    onSuccess: fixtureAdded.type,
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

import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import userReducer from "./authSlice";
import productReducer from "./productSlice";
import highlightReducer from "./highlightSlice";
import fixtureReducer from "./fixtureSlice";
import liveNowReducer from "./liveNowSlice";
import resultReducer from "./resultSlice";

export default combineReducers({
  results: resultReducer,
  liveNows: liveNowReducer,
  fixtures: fixtureReducer,
  highlights: highlightReducer,
  products: productReducer,
  users: usersReducer,
  user: userReducer,
});

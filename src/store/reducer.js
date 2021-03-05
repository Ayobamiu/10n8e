import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import userReducer from "./authSlice";
import productReducer from "./productSlice";
import highlightReducer from "./highlightSlice";
import fixtureReducer from "./fixtureSlice";

export default combineReducers({
  fixtures: fixtureReducer,
  highlights: highlightReducer,
  products: productReducer,
  users: usersReducer,
  user: userReducer,
});

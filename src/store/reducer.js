import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import userReducer from "./authSlice";
import productReducer from "./productSlice";

export default combineReducers({
  products: productReducer,
  users: usersReducer,
  user: userReducer,
});

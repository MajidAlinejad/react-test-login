import { combineReducers } from "redux";
import record from "./Record";
import user from "./User";
import search from "./Search";

const rootReducer = combineReducers({
  record,
  user,
  search,
});

export default rootReducer;

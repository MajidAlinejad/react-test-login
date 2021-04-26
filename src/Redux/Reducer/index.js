import { combineReducers } from "redux";
import record from "./Record";
import user from "./User";

const rootReducer = combineReducers({
  record,
  user,
});

export default rootReducer;
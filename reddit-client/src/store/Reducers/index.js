import { combineReducers } from "redux";

import apiReducers from "./apiReducers";
import otherReducer from "./otherReducers";

export default combineReducers({
    api: apiReducers,
    other: otherReducer,
});
import { combineReducers } from "redux";
import userReducer from "./user.reducer";
// import loaderReducer from "./loader.reducer";

export default combineReducers({
    // REDUCERS
    user: userReducer,
    // loader: loaderReducer
})
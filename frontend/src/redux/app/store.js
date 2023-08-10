import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers"

const store = configureStore({
  reducer: rootReducer,
  // devTools: false
})

export default store;
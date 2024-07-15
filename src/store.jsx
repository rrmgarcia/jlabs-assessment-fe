import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer";
import geoReducer from "./reducers/geoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  geo: geoReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

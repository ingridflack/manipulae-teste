import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import playerReducer from "./reducers/player";
import tracksReducer from "./reducers/tracks";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };

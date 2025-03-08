import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
    Middleware,
  } from "@reduxjs/toolkit";
  import { persistStore, persistReducer } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import logger from "redux-logger";
  // import userReducer from "./user/slice";
  import loginReducer from "./login/slice";
  // import userReducer from "./user/slice";
  
  // // Persist configuration
  const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["user", "auth"],
  };
  
  // // Persisted reducers
  // // const persistedUserReducer = persistReducer(persistConfig, userReducer);
  // const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
  
  const rootReducer = combineReducers({
    // user: persistedUserReducer,
    auth: loginReducer,
    // user: userReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    // reducer: rootReducer,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Disable check for non-serializable data
      }).concat(logger as Middleware), // Add logger to the middleware chain
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  export const persistor = persistStore(store);
  
  export default store;
  
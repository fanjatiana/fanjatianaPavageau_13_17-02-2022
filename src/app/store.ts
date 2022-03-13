import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import tokenReducer from "../features/token/tokenSlice";
import usersReducer from "../features/user/usersSlice";
import loginStatusReducer from "../features/user/loggedSlice"
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: usersReducer,
    login : loginStatusReducer,
    /*[apiSlice.reducerPath] :apiSlice.reducer
  },
  middleware :(getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },*/
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tokenReducer from '../features/token/tokenSlice';
import usersReducer from "../features/user/usersSlice";
import {apiSlice} from '../features/apiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token:tokenReducer,
    user : usersReducer, 
    [apiSlice.reducerPath] :apiSlice.reducer
  },
  middleware :(getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(apiSlice.middleware);
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

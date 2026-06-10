import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app.slice';
import uFormReducer from './uForm.slice';
import rhFormReducer from './rhFormSlice';

export const store = configureStore({
  reducer: {
    data: appReducer,
    UForm: uFormReducer,
    RHForm: rhFormReducer,
  },
});

// Infer the type of `store`
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

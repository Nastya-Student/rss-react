import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { MyFormData } from '../types/MyFormData';

export interface AppState {
  appData: MyFormData[];
}

const initialState: AppState = {
  appData: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MyFormData>): void => {
      state.appData.push(action.payload);
    },
  },
});

export const { add } = appSlice.actions;

export default appSlice.reducer;

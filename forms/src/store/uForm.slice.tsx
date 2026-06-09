import { createSlice } from '@reduxjs/toolkit';

export interface UFormState {
  uForm: boolean;
}

const initialState: UFormState = {
  uForm: false,
};

export const uFormSlice = createSlice({
  name: 'uForm',
  initialState,
  reducers: {
    openUForm: (state): void => {
      state.uForm = true;
    },
    closeUForm: (state): void => {
      state.uForm = false;
    },
  },
});

export const { openUForm, closeUForm } = uFormSlice.actions;

export default uFormSlice.reducer;

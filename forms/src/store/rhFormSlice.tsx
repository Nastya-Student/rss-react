import { createSlice } from '@reduxjs/toolkit';

export interface RHFormState {
  rhForm: boolean;
}

const initialState: RHFormState = {
  rhForm: false,
};

export const rhFormSlice = createSlice({
  name: 'rhForm',
  initialState,
  reducers: {
    openRHForm: (state): void => {
      state.rhForm = true;
    },
    closeRHForm: (state): void => {
      state.rhForm = false;
    },
  },
});

export const { openRHForm, closeRHForm } = rhFormSlice.actions;

export default rhFormSlice.reducer;

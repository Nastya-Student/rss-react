import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ResponseItem } from '../../api/interfaces/Response';
import type { RootState } from '../../app/store';

export interface FlyoutState {
  selectedItems: ResponseItem[];
}

const initialState: FlyoutState = {
  selectedItems: [],
};

export const flyoutSlice = createSlice({
  name: 'flyout',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<ResponseItem>) => {
      state.selectedItems.push(action.payload);
    },

    unselect: (state, action: PayloadAction<string>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.uid !== action.payload
      );
    },

    unselectAll: (state) => {
      state.selectedItems = [];
    },
  },

  extraReducers: (builder) => {},
});

export const { select, unselect, unselectAll } = flyoutSlice.actions;

export default flyoutSlice.reducer;

export const selectItemsLength = (state: RootState) =>
  state.selectedItems.selectedItems.length;

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

export const selectItemsLength = (state: RootState) =>
  state.selectedItems.selectedItems.length;

export const selectFlyoutItems = (state: RootState) =>
  state.selectedItems.selectedItems;

export const selectFlyoutItemsIds = createSelector(
  [selectFlyoutItems],
  (items) => items.map((item) => item.uid)
);

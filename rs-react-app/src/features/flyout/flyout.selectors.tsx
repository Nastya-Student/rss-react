import type { ResponseItem } from '../../api/interfaces/Response';
import type { RootState } from '../../store/store';

export const selectItemsLength = (state: RootState) =>
  state.selectedItems.selectedItems.length;

export const selectFlyoutItems = (state: RootState) =>
  state.selectedItems.selectedItems;

export const selectFlyoutItemsIds = (state: RootState) =>
  state.selectedItems.selectedItems.map((item: ResponseItem) => item.uid);

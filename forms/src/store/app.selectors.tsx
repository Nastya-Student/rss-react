import type { RootState } from './store';

export const selectAllItems = (state: RootState) => {
  return state.data.appData;
};

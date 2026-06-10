import type { RootState } from './store';

export const selectUFormState = (state: RootState) => {
  return state.UForm.uForm;
};

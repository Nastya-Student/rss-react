import type { RootState } from './store';

export const selectRHFormState = (state: RootState) => {
  return state.RHForm.rhForm;
};

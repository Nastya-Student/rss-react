import type { JSX } from 'react/jsx-runtime';
import { Modal } from './Modal';
import { UncontrolledForm } from './UncontrolledForm';

import { useDispatch } from 'react-redux';
import { closeUForm, openUForm } from '../../store/uForm.slice';
import { closeRHForm, openRHForm } from '../../store/rhFormSlice';
import { ReactHookForm } from './ReactHookForm';
import { useAppSelector } from '../../store/hooks';
import { selectRHFormState } from '../../store/rhFormSelector';
import { selectUFormState } from '../../store/uForm.selector';

export const Forms = (): JSX.Element => {
  const dispatch = useDispatch();
  const uFormState = useAppSelector(selectUFormState);
  const rhFormState = useAppSelector(selectRHFormState);

  return (
    <div className="forms-block">
      <button onClick={() => dispatch(openUForm())}>U-Form</button>
      <button onClick={() => dispatch(openRHForm())}>RH-Form</button>
      <Modal formState={uFormState} onClose={() => dispatch(closeUForm())}>
        <UncontrolledForm></UncontrolledForm>
      </Modal>
      <Modal
        formState={rhFormState}
        onClose={() => {
          dispatch(closeRHForm());
        }}
      >
        <ReactHookForm></ReactHookForm>
      </Modal>
    </div>
  );
};

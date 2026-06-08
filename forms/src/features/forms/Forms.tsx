import { useState } from 'react';
import type { JSX } from 'react/jsx-runtime';
import { Modal } from './Modal';
import { UncontrolledForm } from './UncontrolledForm';
import { ReactHookForm } from './ReactHookForm';

type TopControlsProps = {
  className: string;
};

export const Forms = (props: TopControlsProps): JSX.Element => {
  const [isUFormOpen, setIsUFormOpen] = useState(false);
  const [isRHFormOpen, setRHFormOpen] = useState(false);

  return (
    <div className={props.className}>
      <button onClick={() => setIsUFormOpen(true)}>U-Form</button>
      <button onClick={() => setRHFormOpen(true)}>RH-Form</button>
      <Modal isOpen={isUFormOpen} onClose={() => setIsUFormOpen(false)}>
        <UncontrolledForm></UncontrolledForm>
      </Modal>
      <Modal
        isOpen={isRHFormOpen}
        onClose={() => {
          setRHFormOpen(false);
        }}
      >
        <ReactHookForm></ReactHookForm>
      </Modal>
    </div>
  );
};

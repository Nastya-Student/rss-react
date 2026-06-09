import { useEffect, type JSX, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  formState: boolean;
  onClose: () => void;
};

export const Modal = (props: ModalProps): JSX.Element | undefined => {
  useEffect(() => {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    });
  }, []);

  if (!props.formState) {
    return;
  }

  return createPortal(
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.onClose();
        }
      }}
    >
      <div className="modal">{props.children}</div>
    </div>,
    document.body
  );
};

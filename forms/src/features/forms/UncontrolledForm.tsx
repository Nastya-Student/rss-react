import type { JSX } from 'react/jsx-runtime';

export const UncontrolledForm = (): JSX.Element => {
  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
      }}
      className='my-form uncontrolled-form'
    ></form>
  );
};

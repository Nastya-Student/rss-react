import type { JSX } from 'react/jsx-runtime';

export const ReactHookForm = (): JSX.Element => {
  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
      }}
      className='my-form react-hook-form'
    ></form>
  );
};

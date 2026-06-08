import type { JSX } from 'react/jsx-runtime';

export const ReactHookForm = (): JSX.Element => {
  return (
    <form onSubmit={() => {}} className="form-block react-hook-form">
      <h2>React Hook Form</h2>
      <input></input>
      <button>Submit</button>
    </form>
  );
};

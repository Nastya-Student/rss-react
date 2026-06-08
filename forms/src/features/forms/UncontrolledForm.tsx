import type { JSX } from 'react/jsx-runtime';

export const UncontrolledForm = (): JSX.Element => {
  return (
    <form onSubmit={() => {}} className="form-block uncontrolled-form">
      <h2>Uncontrolled Form</h2>
      <button>Submit</button>
    </form>
  );
};

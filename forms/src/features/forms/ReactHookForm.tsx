import type { JSX } from 'react/jsx-runtime';
import { useAppDispatch } from '../../store/hooks';
import { add } from '../../store/app.slice';

export const ReactHookForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={() => {
        dispatch(
          add({
            name: '',
            age: 0,
            email: '',
            gender: 'male',
          })
        );
      }}
      className="form-block react-hook-form"
    >
      <h2>React Hook Form</h2>
      <input></input>
      <button>Submit</button>
    </form>
  );
};

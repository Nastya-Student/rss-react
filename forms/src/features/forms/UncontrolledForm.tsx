import type { JSX } from 'react/jsx-runtime';
import { useAppDispatch } from '../../store/hooks';
import { add } from '../../store/app.slice';
import { Input } from '../../components/Input';

export const UncontrolledForm = (): JSX.Element => {
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
      className="form-block uncontrolled-form"
    >
      <h2>Uncontrolled Form</h2>
      <Input
        type={'text'}
        name={'name'}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        placeholder={'name:'}
        required={true}
        labelText={'Name:'}
      ></Input>
      <Input
        type={'text'}
        name={'age'}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        placeholder={'age:'}
        required={true}
        labelText={'Age:'}
      ></Input>
      <Input
        type={'email'}
        name={'email'}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        placeholder={'email:'}
        required={true}
        labelText={'Email:'}
      ></Input>

      <div className="radio-buttons">
        <Input
          type={'radio'}
          name={'gender'}
          initValue={['male', 'female', 'other']}
          onChange={function (): void {
            throw new Error('Function not implemented.');
          }}
          labelText={'Gender:'}
        ></Input>
      </div>

      <div className="radio-buttons">
        <Input
          type={'checkbox'}
          name={'terms'}
          onChange={function (): void {
            throw new Error('Function not implemented.');
          }}
          required={true}
          labelText={' Terms & Conditions: '}
        ></Input>
      </div>
      <button>Submit</button>
    </form>
  );
};

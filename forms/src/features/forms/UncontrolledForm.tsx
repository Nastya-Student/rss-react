import type { JSX } from 'react/jsx-runtime';
import { useAppDispatch } from '../../store/hooks';
import { add } from '../../store/app.slice';
import { Input } from '../../components/Input';
import { useRef } from 'react';
import { closeUForm } from '../../store/uForm.slice';

export const UncontrolledForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          add({
            name: nameRef.current?.value ?? '',
            age: Number(ageRef.current?.value),
            email: emailRef.current?.value ?? '',
            gender: genderRef.current?.value ?? '',
          })
        );
        dispatch(closeUForm());
      }}
      className="form-block uncontrolled-form"
    >
      <h2>Uncontrolled Form</h2>
      <Input
        inputRef={nameRef}
        type={'text'}
        name={'name'}
        placeholder={'name:'}
        required={true}
        labelText={'Name:'}
      ></Input>
      <Input
        inputRef={ageRef}
        type={'text'}
        name={'age'}
        placeholder={'age:'}
        required={true}
        labelText={'Age:'}
      ></Input>
      <Input
        inputRef={emailRef}
        type={'email'}
        name={'email'}
        placeholder={'email:'}
        required={true}
        labelText={'Email:'}
      ></Input>

      <div className="radio-buttons">
        <Input
          inputRef={genderRef}
          type={'radio'}
          name={'gender'}
          initValue={['male', 'female', 'other']}
          labelText={'Gender:'}
        ></Input>
      </div>

      <div className="radio-buttons">
        <Input
          type={'checkbox'}
          name={'terms'}
          required={true}
          labelText={' Terms & Conditions: '}
        ></Input>
      </div>
      <button>Submit</button>
    </form>
  );
};

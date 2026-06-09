import type { JSX } from 'react/jsx-runtime';
import { useAppDispatch } from '../../store/hooks';
import { add } from '../../store/app.slice';
import { Input } from '../../components/Input';
import { useState } from 'react';
import type { MyFormData } from '../../types/MyFormData';
import { closeRHForm } from '../../store/rhFormSlice';

export const ReactHookForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<MyFormData>({
    name: '',
    age: 0,
    email: '',
    gender: 'male',
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(add(formData));
        dispatch(closeRHForm());
      }}
      className="form-block react-hook-form"
    >
      <h2>React Hook Form</h2>
      <Input
        type={'text'}
        name={'name'}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, name: e.target.value }));
        }}
        placeholder={'name:'}
        required={true}
        labelText={'Name:'}
      ></Input>
      <Input
        type={'text'}
        name={'age'}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, age: Number(e.target.value) }));
        }}
        placeholder={'age:'}
        required={true}
        labelText={'Age:'}
      ></Input>
      <Input
        type={'email'}
        name={'email'}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, email: e.target.value }));
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
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, gender: e.target.value }));
          }}
          labelText={'Gender:'}
        ></Input>
      </div>

      <div className="radio-buttons">
        <Input
          type={'checkbox'}
          name={'terms'}
          // onChange={(e) => {
          //   setFormData((prev) => ({ ...prev, email: e.target.value }));
          // }}
          required={true}
          labelText={' Terms & Conditions: '}
        ></Input>
      </div>

      <button>Submit</button>
    </form>
  );
};

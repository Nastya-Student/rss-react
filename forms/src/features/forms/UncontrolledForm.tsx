import type { JSX } from 'react/jsx-runtime';
import { useAppDispatch } from '../../store/hooks';
import { add } from '../../store/app.slice';
import { Input } from '../../components/Input';
import { useRef } from 'react';
import { closeUForm } from '../../store/uForm.slice';

export const UncontrolledForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (!formRef.current) {
          return;
        }
        const formData = new FormData(formRef.current);
        dispatch(
          add({
            name: formData.get('name')?.toString() ?? '',
            age: formData.get('age')?.toString() ?? '',
            email: formData.get('email')?.toString() ?? '',
            gender: formData.get('gender')?.toString() ?? '',
          })
        );
        dispatch(closeUForm());
      }}
      className="form-block uncontrolled-form"
    >
      <h2>Uncontrolled Form</h2>
      <Input
        type={'text'}
        name={'name'}
        placeholder={'name:'}
        required={true}
        labelText={'Name:'}
      ></Input>
      <Input
        type={'text'}
        name={'age'}
        placeholder={'age:'}
        required={true}
        labelText={'Age:'}
      ></Input>
      <Input
        type={'email'}
        name={'email'}
        placeholder={'email:'}
        required={true}
        labelText={'Email:'}
      ></Input>

      <div className="radio-buttons">
        <fieldset>
          <legend>Gender:</legend>
          <div>
            <label htmlFor="gender-male">Male </label>
            <input
              type="radio"
              name="gender"
              id="gender-male"
              value="male"
              className="radio-button"
              defaultChecked
            ></input>
          </div>
          <div>
            <label htmlFor="gender-female">Female </label>
            <input
              type="radio"
              name="gender"
              id="gender-female"
              value="female"
              className="radio-button"
            ></input>
          </div>
          <div>
            <label htmlFor="gender-other">Other </label>
            <input
              type="radio"
              name="gender"
              id="gender-other"
              value="other"
              className="radio-button"
            ></input>
          </div>
        </fieldset>
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

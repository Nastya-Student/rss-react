import type { JSX } from 'react/jsx-runtime';
import { useAppDispatch } from '../../store/hooks';
import { add } from '../../store/app.slice';
import { Input } from '../../components/Input';
import { closeRHForm } from '../../store/rhFormSlice';
import { Controller, useForm } from 'react-hook-form';
import type { MyFormData } from '../../types/MyFormData';

export const ReactHookForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<MyFormData>({
    defaultValues: {
      name: '',
      age: '',
      email: '',
      gender: 'male',
    },
  });

  const onSubmit = (data: MyFormData) => {
    dispatch(add(data));
    dispatch(closeRHForm());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-block react-hook-form"
    >
      <h2>React Hook Form</h2>

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            type={'text'}
            placeholder={'name:'}
            required={true}
            labelText={'Name:'}
            {...field}
          ></Input>
        )}
      ></Controller>

      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <Input
            type={'number'}
            placeholder={'age:'}
            required={true}
            labelText={'Age:'}
            {...field}
          ></Input>
        )}
      ></Controller>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            type={'email'}
            placeholder={'email:'}
            required={true}
            labelText={'Email:'}
            {...field}
          ></Input>
        )}
      ></Controller>

      <div className="radio-buttons">
        <fieldset>
          <legend>Gender:</legend>

          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <div>
                    <label htmlFor="gender-male">Male </label>
                    <input
                      type="radio"
                      {...field}
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
                      {...field}
                      id="gender-female"
                      value="female"
                      className="radio-button"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="gender-other">Other </label>
                    <input
                      type="radio"
                      {...field}
                      id="gender-other"
                      value="other"
                      className="radio-button"
                    ></input>
                  </div>
                </>
              );
            }}
          ></Controller>
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

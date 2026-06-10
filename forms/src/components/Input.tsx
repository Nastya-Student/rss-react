/* eslint-disable react-hooks/refs */
import type { JSX } from 'react/jsx-runtime';

type InputProps = {
  inputRef?: React.Ref<HTMLInputElement | null>;
  type:
    | 'text'
    | 'email'
    | 'tel'
    | 'radio'
    | 'checkbox'
    | 'file'
    | 'url'
    | 'number';
  name: string;
  value?: string | number | string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  labelText: string;
};

export const Input = (props: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={props.name}>{props.labelText}</label>

      <input
        ref={props.inputRef}
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
      ></input>
    </>
  );
};

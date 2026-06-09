/* eslint-disable react-hooks/refs */
import type { JSX } from 'react/jsx-runtime';

type InputProps = {
  inputRef?: React.Ref<HTMLInputElement | null>;
  type: 'text' | 'email' | 'tel' | 'radio' | 'checkbox' | 'file' | 'url';
  name: string;
  initValue?: string | number | string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  labelText: string;
};

export const Input = (props: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={props.name}>{props.labelText}</label>
      {Array.isArray(props.initValue) ? (
        props.initValue.map((value, index) => (
          <div key={index}>
            <input
              ref={props.inputRef}
              key={index}
              type="radio"
              name={props.name}
              id={props.name}
              value={value}
              onChange={props.onChange}
              placeholder={props.placeholder}
              className="radio-button"
              defaultChecked={value === 'male'}
            ></input>
            <div>{value}</div>
          </div>
        ))
      ) : (
        <input
          ref={props.inputRef}
          type={props.type}
          name={props.name}
          id={props.name}
          value={props.initValue}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
        ></input>
      )}
    </>
  );
};

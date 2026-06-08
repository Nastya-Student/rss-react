import type { JSX } from 'react/jsx-runtime';

type InputProps = {
  type: 'text' | 'email' | 'tel' | 'radio' | 'checkbox' | 'file' | 'url';
  name: string;
  initValue?: string | number | string[];
  onChange: () => void;
  placeholder?: string;
  required?: boolean;
  labelText: string;
  checkedValue?: string;
};

export const Input = (props: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={props.name}>{props.labelText}</label>
      {Array.isArray(props.initValue) ? (
        props.initValue.map((value, index) => {
          return (
            <>
              <input
                key={index}
                type="radio"
                name={props.name}
                id={props.name}
                value={value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                checked={props.checkedValue === value}
                className="radio-button"
              ></input>
              <div>{value}</div>
            </>
          );
        })
      ) : (
        <input
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

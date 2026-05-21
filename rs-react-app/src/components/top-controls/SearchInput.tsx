import { useState, type ChangeEvent, type JSX } from 'react';
import { ITEMS } from '../../constants';

type SearchInputProps = {
  id: string;
  type: 'text';
  placeholder: string;
  initialValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isSelect?: boolean;
  list?: string;
};

export const SearchInput = (props: SearchInputProps): JSX.Element => {
  const [value, setValue] = useState(props.initialValue);

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  const handleInputOnfocus = (): void => {
    if (!props.isSelect) {
      return;
    }
    const tempValue = value;
    setValue('');
    setTimeout(() => {
      setValue(tempValue);
    }, 1000);
  };

  return (
    <div>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={value}
        onChange={handleInput}
        list={props.list}
        disabled={props.disabled}
        onFocus={handleInputOnfocus}
      ></input>
      {props.isSelect ? (
        <datalist id="suggestions">
          {Object.values(ITEMS).map((item) => (
            <option key={item} value={item}></option>
          ))}
        </datalist>
      ) : (
        <></>
      )}
    </div>
  );
};

import { useState, type ChangeEvent, type JSX } from 'react';

type SearchInputProps = {
  id: string;
  type: 'text';
  placeholder: string;
  initialValue: string;
  onChange: (value: string) => void;
};

export const SearchInput = (props: SearchInputProps): JSX.Element => {
  const [value, setValue] = useState(props.initialValue);

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  const handleInputOnfocus = (): void => {
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
        list="suggestions"
        onFocus={handleInputOnfocus}
      ></input>
      <datalist id="suggestions">
        <option value="animals" />
        <option value="astronomical objects" />
        <option value="book collections" />
        <option value="books" />
        <option value="book series" />
        <option value="comics" />
        <option value="conflicts" />
        <option value="characters" />
        <option value="comic collections" />
        <option value="companies" />
        <option value="comic series" />
        <option value="comic strips" />
        <option value="elements" />
        <option value="episodes" />
        <option value="foods" />
        <option value="literature pieces" />
        <option value="locations" />
        <option value="magazines" />
        <option value="medical conditions" />
        <option value="movies" />
        <option value="magazine series" />
        <option value="materials" />
        <option value="occupations" />
        <option value="organizations" />
        <option value="performers" />
        <option value="seasons" />
        <option value="spacecraft classes" />
        <option value="series" />
        <option value="soundtracks" />
        <option value="species" />
        <option value="spacecrafts" />
        <option value="staff members" />
        <option value="trading cards" />
        <option value="technology pieces" />
        <option value="titles" />
        <option value="trading card decks" />
        <option value="trading card sets" />
        <option value="video games" />
        <option value="video releases" />
        <option value="weapons" />
      </datalist>
    </div>
  );
};

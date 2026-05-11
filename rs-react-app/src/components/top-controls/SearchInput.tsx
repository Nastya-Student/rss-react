import React, { type ChangeEvent } from 'react';

type SearchInputProps = {
  id: string;
  type: 'text';
  placeholder: string;
  initialValue: string;
  onChange: (value: string) => void;
};

type SearchInputState = {
  value: string;
};

export class SearchInput extends React.Component<
  SearchInputProps,
  SearchInputState
> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleInput}
          list="suggestions"
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
          <option value="trading card decks" />
          <option value="video games" />
          <option value="video releases" />
          <option value="weapons" />
        </datalist>
      </div>
    );
  }
}

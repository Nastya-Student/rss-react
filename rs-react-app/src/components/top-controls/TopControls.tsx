import { useState, type JSX } from 'react';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';
import type { ResponseItem, ResponsePage } from '../../api/interfaces/Response';

type TopControlsProps = {
  className: string;
  transferItems: (
    items: ResponseItem[],
    pageInfo: ResponsePage,
    isLoading: boolean
  ) => void;
};

export const TopControls = (props: TopControlsProps): JSX.Element => {
  const [searchKey, setSearchKey] = useState(
    localStorage.getItem('last-search') ?? ''
  );

  const handleInputValue = (value: string): void => {
    setSearchKey(value);
  };

  const handleGetItems = (
    items: ResponseItem[],
    pageInfo: ResponsePage,
    isLoading: boolean
  ): void => {
    props.transferItems(items, pageInfo, isLoading);
  };

  return (
    <div className={props.className}>
      <div className="search-form">
        <SearchInput
          id={'search-input'}
          type={'text'}
          placeholder={'select smth'}
          initialValue={searchKey}
          onChange={handleInputValue}
        ></SearchInput>
        <SearchButton searchKey={searchKey} onGetItems={handleGetItems}>
          Search
        </SearchButton>
      </div>

      <div className="search-form search-by-name-form">
        <input
          id="search-by-name-input"
          type="text"
          placeholder="search by name"
          disabled
        ></input>
        <button disabled>Search</button>
      </div>
    </div>
  );
};

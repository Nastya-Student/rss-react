import { useState, type JSX } from 'react';
import { SearchInput } from './SearchInput';
import type { AppResponse } from '../../api/interfaces/Response';
import { LOCAL_STORAGE } from '../../constants';
import { useSearchParams } from 'react-router-dom';
import { getItems } from '../../api/getItems';
import { Button } from '../../components/Button';

type TopControlsProps = {
  className: string;
  transferItems: (items: AppResponse, isLoading: boolean) => void;
};

export const TopControls = (props: TopControlsProps): JSX.Element => {
  const [category, setCategory] = useState(
    localStorage.getItem(LOCAL_STORAGE.lastCategory) ?? ''
  );
  const [name, setName] = useState(
    localStorage.getItem(LOCAL_STORAGE.lastName) ?? ''
  );

  const [disabledValue, setDisabledValue] = useState<boolean>(category === '');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputCategory = (value: string): void => {
    setCategory(value);
    setDisabledValue(false);
  };

  const handleInputName = (value: string): void => {
    setName(value);
  };

  const handleGetItems = (items: AppResponse, isLoading: boolean): void => {
    props.transferItems(items, isLoading);
  };

  const handleSubmitForm = (e: React.SubmitEvent): void => {
    e.preventDefault();
    const categoryValue = category.trim();
    const nameValue = name.trim();

    if (!categoryValue && !nameValue) {
      handleGetItems(
        {
          items: [],
          pageInfo: {
            pageNumber: 0,
            totalPages: 0,
            firstPage: false,
            lastPage: false,
          },
        },
        false
      );
    }

    if (
      localStorage.getItem(LOCAL_STORAGE.lastCategory) === categoryValue &&
      localStorage.getItem(LOCAL_STORAGE.lastName) === nameValue
    ) {
      return;
    }

    localStorage.setItem(LOCAL_STORAGE.lastCategory, categoryValue);
    localStorage.setItem(LOCAL_STORAGE.lastName, nameValue);

    handleGetItems(
      {
        items: [],
        pageInfo: {
          pageNumber: 0,
          totalPages: 0,
          firstPage: false,
          lastPage: false,
        },
      },
      true
    );

    setSearchParams({ pageNumber: '0' });

    getItems({
      listName: categoryValue,
      params: searchParams,
      name: nameValue,
    })
      .then((items) => {
        handleGetItems(items, false);
      })
      .catch(() =>
        handleGetItems(
          {
            items: [],
            pageInfo: {
              pageNumber: 0,
              totalPages: 0,
              firstPage: true,
              lastPage: true,
            },
          },
          false
        )
      );
  };

  const handleResetButton = (): void => {
    setCategory('');
    setName('');
    localStorage.setItem(LOCAL_STORAGE.lastCategory, '');
    localStorage.setItem(LOCAL_STORAGE.lastName, '');
  };

  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className={props.className}>
      <div className="search-form">
        <SearchInput
          id={'search-input'}
          type={'text'}
          placeholder={'select smth'}
          initialValue={category}
          onChange={handleInputCategory}
          isSelect={true}
          list="suggestions"
        ></SearchInput>
        <Button onclick={handleResetButton}>Reset</Button>
      </div>

      <div className="search-form search-by-name-form">
        <SearchInput
          id="search-by-name-input"
          type="text"
          placeholder="search by name"
          initialValue={name}
          disabled={disabledValue}
          onChange={handleInputName}
          isSelect={false}
        ></SearchInput>
        <Button>Search</Button>
      </div>
    </form>
  );
};

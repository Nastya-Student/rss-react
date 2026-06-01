import type { JSX } from 'react';
import { getItems } from '../../api/getItems';
import type { AppResponse } from '../../api/interfaces/Response';
import { LOCAL_STORAGE } from '../../constants';
import { useSearchParams } from 'react-router-dom';

type SearchButtonProps = {
  searchKey: string;
  onGetItems: (items: AppResponse, isLoading: boolean) => void;
  disabled?: boolean;
  isNameSearch?: boolean;
};

export const SearchButton = (props: SearchButtonProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickBtn = () => {
    const value = props.searchKey.trim();
    if (localStorage.getItem(LOCAL_STORAGE.lastSearch) === value) {
      return;
    }
    if (!props.isNameSearch) {
      localStorage.setItem(LOCAL_STORAGE.lastSearch, value);
    }

    props.onGetItems(
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
      listName: props.isNameSearch
        ? (localStorage.getItem(LOCAL_STORAGE.lastSearch) ?? '')
        : value,
      params: searchParams,
      name: props.isNameSearch ? value : '',
    })
      .then((items) => {
        props.onGetItems(items, false);
      })
      .catch(() =>
        props.onGetItems(
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

  return (
    <button onClick={onClickBtn} disabled={props.disabled}>
      Search
    </button>
  );
};

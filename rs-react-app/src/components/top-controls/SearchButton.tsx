import type { JSX } from 'react';
import { getItems } from '../../api/getItems';
import type { ResponseItem, ResponsePage } from '../../api/interfaces/Response';
import { LOCAL_STORAGE } from '../../constants';

type SearchButtonProps = {
  searchKey: string;
  onGetItems: (
    items: ResponseItem[],
    pageInfo: ResponsePage,
    isLoading: boolean
  ) => void;
  disabled?: boolean;
  isNameSearch?: boolean;
};

export const SearchButton = (props: SearchButtonProps): JSX.Element => {
  const onClickBtn = () => {
    const value = props.searchKey.trim();
    if (localStorage.getItem(LOCAL_STORAGE.lastSearch) === value) {
      return;
    }
    if (!props.isNameSearch) {
      localStorage.setItem(LOCAL_STORAGE.lastSearch, value);
    }

    props.onGetItems(
      [],
      {
        pageNumber: 0,
        totalPages: 0,
        firstPage: false,
        lastPage: false,
      },
      true
    );

    getItems({
      listName: props.isNameSearch
        ? (localStorage.getItem(LOCAL_STORAGE.lastSearch) ?? '')
        : value,
      pageNumber: 0,
      name: props.isNameSearch ? value : '',
    })
      .then((items) => {
        props.onGetItems(items.items, items.pageInfo, false);
      })
      .catch(() =>
        props.onGetItems(
          [],
          {
            pageNumber: 0,
            totalPages: 0,
            firstPage: true,
            lastPage: true,
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

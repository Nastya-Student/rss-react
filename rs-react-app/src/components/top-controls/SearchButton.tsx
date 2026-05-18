import type { JSX, ReactNode } from 'react';
import { getItems } from '../../api/getItems';
import type { ResponseItem, ResponsePage } from '../../api/interfaces/Response';
import { LOCAL_STORAGE } from '../../constants';

type SearchButtonProps = {
  children: ReactNode;
  searchKey: string;
  onGetItems: (
    items: ResponseItem[],
    pageInfo: ResponsePage,
    isLoading: boolean
  ) => void;
};

export const SearchButton = (props: SearchButtonProps): JSX.Element => {
  const onClickBtn = () => {
    const value = props.searchKey.trim();
    if (localStorage.getItem(LOCAL_STORAGE.lastSearch) === value) {
      return;
    }

    localStorage.setItem(LOCAL_STORAGE.lastSearch, value);

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
      listName: value,
      pageNumber: 0,
    })
      .then((items) => props.onGetItems(items.items, items.pageInfo, false))
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

  return <button onClick={onClickBtn}>{props.children}</button>;
};

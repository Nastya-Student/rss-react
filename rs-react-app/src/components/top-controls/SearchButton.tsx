import type { JSX, ReactNode } from 'react';
import { getItems } from '../../api/getItems';
import type { ResponseItem } from '../../api/interfaces/Response';

type SearchButtonProps = {
  children: ReactNode;
  searchKey: string;
  onGetItems: (items: ResponseItem[], isLoading: boolean) => void;
};

export const SearchButton = (props: SearchButtonProps): JSX.Element => {
  const onClickBtn = () => {
    const value = props.searchKey.trim();
    if (localStorage.getItem('last-search') === value) {
      return;
    }
    localStorage.setItem('last-search', value);
    props.onGetItems([], true);
    getItems(value)
      .then((items) => props.onGetItems(items, false))
      .catch(() => props.onGetItems([], false));
  };

  return <button onClick={onClickBtn}>{props.children}</button>;
};

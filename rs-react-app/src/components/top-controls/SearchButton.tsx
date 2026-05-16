import React, { type ReactNode } from 'react';
import { getItems } from '../../api/getItems';
import type { ResponseItem } from '../../api/interfaces/Response';

type SearchButtonProps = {
  children: ReactNode;
  searchKey: string;
  onGetItems: (items: ResponseItem[], isLoading: boolean) => void;
};

export class SearchButton extends React.Component<SearchButtonProps> {
  constructor(props: SearchButtonProps) {
    super(props);
  }

  onClickBtn = () => {
    const value = this.props.searchKey.trim();
    if (localStorage.getItem('last-search') === value) {
      return;
    }
    localStorage.setItem('last-search', value);
    this.props.onGetItems([], true);
    getItems(value)
      .then((items) => this.props.onGetItems(items, false))
      .catch(() => this.props.onGetItems([], false));
  };

  render() {
    return <button onClick={this.onClickBtn}>{this.props.children}</button>;
  }
}

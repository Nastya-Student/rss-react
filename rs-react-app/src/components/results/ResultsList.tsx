import React, { type ReactNode } from 'react';
import type { ResponseItem } from '../../api/interfaces/Response';
import { Loader } from '../Loader';

type ResultListProps = {
  children: ReactNode;
  items: ResponseItem[];
  shouldThrowError: boolean;
  isLoading: boolean;
};

type ResultListState = {
  shouldThrowError: boolean;
  isLoading: boolean;
};

export class ResultList extends React.Component<
  ResultListProps,
  ResultListState
> {
  constructor(props: ResultListProps) {
    super(props);
  }

  render() {
    if (this.props.isLoading) {
      return <Loader></Loader>;
    }

    if (this.props.shouldThrowError) {
      return (
        <h2 className="error-header">
          No items was found. Please, choose something from the list.
        </h2>
      );
    }

    return (
      <ul className="results-list">
        <h2>Results:</h2>
        <li className="list-item">
          <div className="list-item-name title">Name</div>
          <div className="list-item-description title">Description</div>
        </li>
        {this.props.items.map((item, index) => (
          <li key={index} className="list-item">
            <div className="list-item-name">{item.name}</div>
            <div className="list-item-description">
              {item.description.map((descriptionItem, index) => (
                <div key={index} className="description-item">
                  {descriptionItem}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

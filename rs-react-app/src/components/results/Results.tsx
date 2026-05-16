import React from 'react';
import { ResultList } from './ResultsList';
import type { ResponseItem } from '../../api/interfaces/Response';
import { ErrorBoundary } from '../../ErrorBoundary';

type ResultsProps = {
  className: string;
  items: ResponseItem[];
  isLoading: boolean;
};

export class Results extends React.Component<ResultsProps> {
  constructor(props: ResultsProps) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <ErrorBoundary message="No items was found. Please, choose something from the list.">
          <ResultList
            items={this.props.items}
            shouldThrowError={this.props.items.length === 0}
            isLoading={this.props.isLoading}
          >
            Results
          </ResultList>
        </ErrorBoundary>
      </div>
    );
  }
}

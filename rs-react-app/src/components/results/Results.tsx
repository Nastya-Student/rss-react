import { ResultList } from './ResultsList';
import type { ResponseItem } from '../../api/interfaces/Response';
import { ErrorBoundary } from '../../ErrorBoundary';
import type { JSX } from 'react';

type ResultsProps = {
  className: string;
  items: ResponseItem[];
  isLoading: boolean;
};

export const Results = (props: ResultsProps): JSX.Element => {
  return (
    <div className={props.className}>
      <ErrorBoundary message="No items was found. Please, choose something from the list.">
        <ResultList
          items={props.items}
          shouldThrowError={props.items.length === 0}
          isLoading={props.isLoading}
        >
          Results
        </ResultList>
      </ErrorBoundary>
    </div>
  );
};

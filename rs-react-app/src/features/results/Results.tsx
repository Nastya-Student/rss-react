import { ResultList } from './ResultsList';
import type { AppResponse } from '../../api/interfaces/Response';
import { ErrorBoundary } from '../../ErrorBoundary';
import type { JSX } from 'react';

type ResultsProps = {
  className: string;
  response: AppResponse;
  isLoading: boolean;
};

export const Results = (props: ResultsProps): JSX.Element => {
  return (
    <div className={props.className}>
      <ErrorBoundary message="No items was found. Please, choose something from the list.">
        <ResultList
          response={props.response}
          shouldThrowError={props.response.items.length === 0}
          isLoading={props.isLoading}
        >
          Results
        </ResultList>
      </ErrorBoundary>
    </div>
  );
};

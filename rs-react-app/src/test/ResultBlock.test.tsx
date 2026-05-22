import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { ResultList } from '../components/results/ResultsList';

describe('Results-title', () => {
  // type ResultsProps = {
  //   className: 'block';
  //   items: [];
  // };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders a Results title', () => {
    render(
      // // eslint-disable-next-line react/no-children-prop
      // <ResultList
      //   children={'Results:'}
      //   items={[]}
      //   pageInfo={}
      //   shouldThrowError={false}
      //   isLoading={false}
      // />
      <>
        <div></div>
      </>
    );

    expect(
      screen.getByRole('heading', { name: 'Results:' })
    ).toBeInTheDocument();
  });
});

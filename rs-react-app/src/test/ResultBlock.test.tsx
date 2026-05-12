import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResultList } from '../components/results/ResultsList';

describe('Results-title', () => {
  type ResultsProps = {
    className: 'block';
    items: [];
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders a Results title', () => {
    render(<ResultList children={'Results:'} items={[]} />);

    expect(
      screen.getByRole('heading', { name: 'Results:' })
    ).toBeInTheDocument();
  });
});

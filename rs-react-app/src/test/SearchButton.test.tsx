import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchButton } from '../components/top-controls/SearchButton';

describe('SearchButton', () => {
  it('renders a search button', () => {
    render(
      <SearchButton
        searchKey={''}
        onGetItems={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});

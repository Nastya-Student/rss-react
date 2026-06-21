import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import { AboutPage } from '../pages/AboutPage';

test('AboutPage renders author and link', () => {
  render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  );
  expect(screen.getByText(/Nastya/i)).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /The Rolling Scopes School React Course/i,
    })
  ).toHaveAttribute('href', 'https://rs.school/courses/reactjs');
});

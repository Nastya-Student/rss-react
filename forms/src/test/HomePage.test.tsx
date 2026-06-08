import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import { HomePage } from '../pages/HomePage';

render(
  <MemoryRouter>
    <HomePage />
  </MemoryRouter>
);

test('HomePage renders U-Form button', () => {
  const button = screen.getByRole('button', { name: /U-Form/i });
  expect(button).toBeInTheDocument();
});

test('HomePage renders RH-Form button', () => {
  const button = screen.getByRole('button', { name: /RH-Form/i });
  expect(button).toBeInTheDocument();
});

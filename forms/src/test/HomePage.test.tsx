import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, expect, test } from 'vitest';
import { HomePage } from '../pages/HomePage';
import { Provider } from 'react-redux';
import { store } from '../store/store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </Provider>
  );
});

test('HomePage renders U-Form button', () => {
  const button = screen.getByRole('button', { name: /U-Form/i });
  expect(button).toBeInTheDocument();
});

test('HomePage renders RH-Form button', () => {
  const button = screen.getByRole('button', { name: /RH-Form/i });
  expect(button).toBeInTheDocument();
});

afterEach(() => {
  cleanup();
});

'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '../context/Theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

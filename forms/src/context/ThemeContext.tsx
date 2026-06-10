import { createContext } from 'react';

interface IThemeContext {
  value: 'dark' | 'light';
  setValue: (themeValue: 'dark' | 'light') => void;
}

export const ThemeContext = createContext<IThemeContext>({
  value: 'dark',
  setValue: () => undefined,
});

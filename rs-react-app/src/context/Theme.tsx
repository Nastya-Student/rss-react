import { useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeValue, setThemeValue] = useState<'dark' | 'light'>('dark');

  return (
    <ThemeContext.Provider
      value={{ value: themeValue, setValue: setThemeValue }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

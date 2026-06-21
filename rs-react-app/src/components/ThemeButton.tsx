import { useContext, useEffect, type JSX } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeButton = (): JSX.Element => {
  const { value, setValue } = useContext(ThemeContext);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', value);
  });
  return (
    <button
      onClick={() => {
        setValue(value === 'dark' ? 'light' : 'dark');
      }}
    >
      Theme: {value}
    </button>
  );
};

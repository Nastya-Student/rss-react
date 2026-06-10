import { type JSX } from 'react';
import { ThemeButton } from './ThemeButton';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div></div>
      <div>
        <h1>My Forms</h1>
      </div>
      <div className="header-buttons">
        <ThemeButton></ThemeButton>
      </div>
    </header>
  );
};

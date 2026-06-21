import { type JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeButton } from './ThemeButton';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleAbout = () => {
    navigate('about');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <header>
      <div></div>
      <div>
        <h1>Star Trek </h1>
        <p>(Memory Alpha data)</p>
      </div>
      <div className="header-buttons">
        <ThemeButton></ThemeButton>
        {isHomePage ? (
          <button onClick={handleAbout}>About</button>
        ) : (
          <button onClick={handleHome}>Home</button>
        )}
      </div>
    </header>
  );
};

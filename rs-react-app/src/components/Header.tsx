import { type JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

  if (isHomePage) {
    return (
      <header>
        <div></div>
        <h1>Star Trek objects</h1>
        <button onClick={handleAbout}>About</button>
      </header>
    );
  }
  return (
    <header>
      <div></div>
      <h1>Star Trek objects</h1>
      <button onClick={handleHome}>Home</button>
    </header>
  );
};

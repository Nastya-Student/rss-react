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
        <div>
          <h1>Star Trek </h1>
          <p>(Memory Alpha data)</p>
        </div>

        <button onClick={handleAbout}>About</button>
      </header>
    );
  }
  return (
    <header>
      <div></div>
      <div>
        <h1>Star Trek </h1>
        <p>(Memory Alpha data)</p>
      </div>
      <button onClick={handleHome}>Home</button>
    </header>
  );
};

import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate('/');
  };
  return (
    <>
      <main>
        <div className="error-page-title">
          <div>
            <h1>404: Page not found.</h1>
          </div>
          <div>Here is nothing to search.</div>
          <div>Please, go away.</div>

          <button onClick={handleOnclick}>Go away</button>
        </div>
      </main>
    </>
  );
};

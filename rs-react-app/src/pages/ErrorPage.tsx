import type { JSX } from 'react';

export const ErrorPage = (): JSX.Element => {
  return (
    <>
      <main>
        <div className="error-page-title">
          <div>
            <h1>404: Page not found.</h1>
          </div>
          <div>Here is nothing to search.</div>
          <div>Please, go away.</div>

          <button>Go away</button>
        </div>
      </main>
    </>
  );
};

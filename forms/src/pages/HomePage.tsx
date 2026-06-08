import { type JSX } from 'react';

import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../components/Header';
import { Forms } from '../features/forms/Forms';
import { Results } from '../features/results/Results';
import { Footer } from '../components/Footer';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <ErrorBoundary message="Something went wrong. Please, reload this page.">
        <Header></Header>
        <main>
          <Forms className="forms-block"></Forms>
          <Results></Results>
        </main>

        <Footer></Footer>
      </ErrorBoundary>
    </>
  );
};

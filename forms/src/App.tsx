import type { JSX } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ErrorBoundary } from './ErrorBoundary';
import { ErrorPage } from './pages/ErrorPage';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage></HomePage>}>
          <Route
            index
            element={
              <ErrorBoundary
                message={'Something went wrong. Please, reload this page.'}
              ></ErrorBoundary>
            }
          ></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

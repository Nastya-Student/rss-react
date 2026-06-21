import type { JSX } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ErrorPage } from './pages/ErrorPage';
import { ErrorBoundary } from './ErrorBoundary';
import { Details } from './features/Details';


export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<HomePage></HomePage>}>
          <Route
            index
            element={
              <ErrorBoundary
                message={'Something went wrong. Please, reload this page.'}
              ></ErrorBoundary>
            }
          ></Route>
          <Route
            path="details/:category/:uid"
            element={<Details></Details>}
          ></Route>
        </Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

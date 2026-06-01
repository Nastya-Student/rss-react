import { useEffect, useState, type JSX } from 'react';
import type { AppResponse } from '../api/interfaces/Response';
import { getItems } from '../api/getItems';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../components/Header';
import { TopControls } from '../features/top-controls/TopControls';
import { Results } from '../features/results/Results';
import { ErrorButton } from '../components/ErrorButton';
import { Footer } from '../components/Footer';
import { LOCAL_STORAGE } from '../constants';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { Flyout } from '../features/flyout/Flyout';

export const HomePage = (): JSX.Element => {
  const [response, setResponse] = useState<AppResponse>({
    items: [],
    pageInfo: {
      pageNumber: 0,
      totalPages: 0,
      firstPage: true,
      lastPage: true,
    },
    category: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleItems = (response: AppResponse, isLoading: boolean) => {
    setResponse(response);
    setIsLoading(isLoading);
  };

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    });
    const lastSearch = localStorage.getItem(LOCAL_STORAGE.lastSearch);
    if (lastSearch) {
      setSearchParams({ pageNumber: '0' });
      const loadItems = async (): Promise<void> => {
        setIsLoading(true);
        await getItems({
          listName: lastSearch,
          params: searchParams,
        })
          .then((response) => {
            handleItems(response, false);
          })
          .finally(() => setIsLoading(false));
      };
      loadItems();
    }
  }, []);

  return (
    <>
      <ErrorBoundary message="Something went wrong. Please, reload this page.">
        <Header></Header>
        <main>
          <TopControls
            className="block search-block"
            transferItems={handleItems}
          ></TopControls>
          <Results
            className="block block-results"
            response={response}
            isLoading={isLoading}
          ></Results>
          <Outlet></Outlet>

          <ErrorButton></ErrorButton>
        </main>
        <Flyout></Flyout>

        <Footer></Footer>
      </ErrorBoundary>
    </>
  );
};

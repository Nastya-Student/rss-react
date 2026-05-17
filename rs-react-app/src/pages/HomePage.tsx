import { useEffect, useState, type JSX } from 'react';
import type { ResponseItem } from '../api/interfaces/Response';
import { getItems } from '../api/getItems';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../components/Header';
import { TopControls } from '../components/top-controls/TopControls';
import { Results } from '../components/results/Results';
import { ErrorButton } from '../components/ErrorButton';
import { Footer } from '../components/Footer';

export const HomePage = (): JSX.Element => {
  const [items, setItems] = useState<ResponseItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleItems = (items: ResponseItem[], isLoading: boolean) => {
    setItems(items);
    setIsLoading(isLoading);
  };

  useEffect(() => {
    const lastSearch = localStorage.getItem('last-search');
    if (lastSearch) {
      const loadItems = async (): Promise<void> => {
        setIsLoading(true);
        await getItems(lastSearch)
          .then((items) => handleItems(items, false))
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
            items={items}
            isLoading={isLoading}
          ></Results>
          <ErrorButton></ErrorButton>
        </main>
        <Footer></Footer>
      </ErrorBoundary>
    </>
  );
};

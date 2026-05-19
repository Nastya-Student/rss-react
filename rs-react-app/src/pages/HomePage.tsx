import { useEffect, useState, type JSX } from 'react';
import type { ResponseItem, ResponsePage } from '../api/interfaces/Response';
import { getItems } from '../api/getItems';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../components/Header';
import { TopControls } from '../components/top-controls/TopControls';
import { Results } from '../components/results/Results';
import { ErrorButton } from '../components/ErrorButton';
import { Footer } from '../components/Footer';
import { LOCAL_STORAGE } from '../constants';

export const HomePage = (): JSX.Element => {
  const [items, setItems] = useState<ResponseItem[]>([]);
  const [pageInfo, setPageInfo] = useState<ResponsePage>({
    pageNumber: 0,
    totalPages: 0,
    firstPage: true,
    lastPage: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleItems = (
    items: ResponseItem[],
    pageInfo: ResponsePage,
    isLoading: boolean
  ) => {
    setItems(items); // useEffect
    setIsLoading(isLoading);
    setPageInfo(pageInfo);
  };

  useEffect(() => {
    const lastSearch = localStorage.getItem(LOCAL_STORAGE.lastSearch);
    if (lastSearch) {
      const loadItems = async (): Promise<void> => {
        setIsLoading(true);
        await getItems({
          listName: lastSearch,
          pageNumber: 0,
        })
          .then((items) => handleItems(items.items, items.pageInfo, false))
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
            pageInfo={pageInfo}
            isLoading={isLoading}
          ></Results>
          <ErrorButton></ErrorButton>
        </main>
        <Footer></Footer>
      </ErrorBoundary>
    </>
  );
};

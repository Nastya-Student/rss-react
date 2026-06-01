import { useEffect, useState, type JSX, type ReactNode } from 'react';
import type { AppResponse, ResponseItem } from '../../api/interfaces/Response';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { getItems } from '../../api/getItems';
import { LOCAL_STORAGE } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { Card } from './card/Card';

type ResultListProps = {
  children: ReactNode;
  response: AppResponse;
  shouldThrowError: boolean;
  isLoading: boolean;
};

export const ResultList = (props: ResultListProps): JSX.Element => {
  const [items, setItems] = useState(props.response.items);
  const [pageInfo, setPageInfo] = useState(props.response.pageInfo);
  const [shouldThrowError, setShouldThrowError] = useState(
    props.shouldThrowError
  );
  const [isLoading, setIsLoading] = useState(props.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      setItems(props.response.items);
      setPageInfo(props.response.pageInfo);
      setShouldThrowError(props.shouldThrowError);
      setIsLoading(props.isLoading);
    };

    loadData();
  }, [
    props.response.items,
    props.response.pageInfo,
    props.shouldThrowError,
    props.isLoading,
  ]);

  const increasePageNumber = (): void => {
    const nextPage = pageInfo.pageNumber + 1;
    setIsLoading(true);
    getData(nextPage);
  };

  const decreasePageNumber = (): void => {
    const prevPage = pageInfo.pageNumber - 1;
    setIsLoading(true);
    getData(prevPage);
  };

  const getFirstPage = (): void => {
    setIsLoading(true);
    getData(0);
  };

  const getLastPage = (): void => {
    setIsLoading(true);
    getData(pageInfo.totalPages - 1);
  };

  const getData = (pageNumber: number): void => {
    setShouldThrowError(false);

    getItems({
      listName: localStorage.getItem(LOCAL_STORAGE.lastSearch) ?? '',
      params: new URLSearchParams({ pageNumber: pageNumber.toString() }),
    })
      .then((response) => {
        setItems(response.items);
        setPageInfo(response.pageInfo);
      })
      .catch(() => {
        setShouldThrowError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (shouldThrowError) {
    return (
      <h2 className="error-header">
        No items was found. Please, choose something from the list.
      </h2>
    );
  }

  const handleItemOnclick = (item: ResponseItem) => {
    navigate(`details/${props.response.category}/${item.uid}`);
  };

  return (
    <ul className="results-list">
      <h2>{props.children}</h2>
      <Pagination
        pageNumber={pageInfo.pageNumber}
        totalPages={pageInfo.totalPages}
        firstPage={pageInfo.firstPage}
        lastPage={pageInfo.lastPage}
        onClickNext={increasePageNumber}
        onCLickPrev={decreasePageNumber}
        onClickFirst={getFirstPage}
        onClickLast={getLastPage}
      ></Pagination>
      <li className="list-item">
        <div className="list-item-name title">Name</div>
        <div className="list-item-description title">Description</div>
      </li>
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          onclickItem={handleItemOnclick}
          category={props.response.category ?? ''}
        ></Card>
      ))}
    </ul>
  );
};

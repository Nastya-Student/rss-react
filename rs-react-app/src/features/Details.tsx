import { useEffect, useState, type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { getItemBuId } from '../api/getItems';
import { CheckboxInput } from './results/card/CheckboxInput';
import { selectFlyoutItemsIds } from './flyout/flyout.selectors';
import { useAppSelector } from '../store/hooks';
import type { ResponseItem } from '../api/interfaces/Response';
import { Loader } from '../components/Loader';

export const Details = (): JSX.Element => {
  const { category } = useParams();
  const { uid } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState<string[]>([]);

  const [item, setItem] = useState<ResponseItem>({
    uid: '',
    name: '',
    description: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const selectedItems = useAppSelector(selectFlyoutItemsIds);
  const isMarked = item ? selectedItems.includes(item.uid) : false;

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await getItemBuId({
          listName: category ?? '',
          params: new URLSearchParams({ uid: uid ?? '' }),
        });

        setName(response.name);
        setDescription(response.description);
        setItem(response);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [category, uid]);

  if (isLoading) {
    return (
      <div className="details">
        <span className="close-hint">press esc to close</span>
        <Loader></Loader>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details">
        <span className="close-hint">press esc to close</span>
        <h2 className="error-header">
          No items was found. Please, choose something from the list.
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="details">
        <span className="close-hint">press esc to close</span>
        <div className="details-name">
          <div className="details-name-header">
            <h2>Name:</h2>
            <CheckboxInput isMarked={isMarked} item={item}></CheckboxInput>
          </div>

          <div>{name}</div>
        </div>
        <p className="category-description">
          <i>category: {category}</i>
        </p>
        <div className="details-description">
          <h2>Description:</h2>
          {description.map((descriptionItem, index) => (
            <div key={index} className="description-item">
              {descriptionItem}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

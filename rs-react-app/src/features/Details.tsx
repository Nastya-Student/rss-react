import { useEffect, useState, type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { getItemBuId } from '../api/getItems';

export const Details = (): JSX.Element => {
  const { category } = useParams();
  const { uid } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState<string[]>([]);

  const getData = async (): Promise<void> => {
    try {
      const response = await getItemBuId({
        listName: category ?? '',
        params: new URLSearchParams({ uid: uid ?? '' }),
      });

      console.log('details-data: ' + response.name);

      setName(response.name);
      setDescription(response.description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      getData();
    };
    loadData();
  }, []);

  return (
    <>
      <div className="details">
        <span className="close-hint">press esc to close</span>
        <div className="details-name">
          <div className="details-name-header">
            <h2>Name:</h2>
            <input
              type="checkbox"
              className="favorite-checkbox"
              checked
            ></input>
          </div>

          <div>{name}</div>
        </div>
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

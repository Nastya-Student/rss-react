import type { JSX } from 'react';
import { useParams } from 'react-router-dom';

export const Details = (): JSX.Element => {
  const { name } = useParams();
  const { description } = useParams();
  return (
    <>
      <div className="details">
        <span className="close-hint">press esk to close</span>
        <div className="details-name">
          <h2>Name:</h2>
          <div>{name}</div>
        </div>
        <div className="details-description">
          <h2>Description:</h2>
          {description?.split(',').map((descriptionItem, index) => (
            <div key={index} className="description-item">
              {descriptionItem}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

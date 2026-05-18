import type { JSX } from 'react';
import type { ResponseItem } from '../api/interfaces/Response';

export const Details = (props: ResponseItem): JSX.Element => {
  return (
    <>
      <div className="block details">
        <div className="details-name">
          <h2>Name:</h2>
          <div>{props.name}</div>
        </div>
        <div className="details-description">
          <h2>Description:</h2>
          {props.description.map((descriptionItem, index) => (
            <div key={index} className="description-item">
              {descriptionItem}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

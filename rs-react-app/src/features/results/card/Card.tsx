import { useState, type JSX } from 'react';
import type { ResponseItem } from '../../../api/interfaces/Response';
import { useAppDispatch } from '../../../app/hooks';
import { select, unselect } from '../../flyout/flyoutSlice';

type CardProps = {
  key: number;
  item: ResponseItem;
  onclickItem: (item: ResponseItem) => void;
};

export const Card = (props: CardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isMarked, setIsMarked] = useState(false);

  return (
    <li
      key={props.key}
      className="list-item"
      onClick={() => props.onclickItem(props.item)}
    >
      <div className="list-item-name">{props.item.name}</div>
      <div className="list-item-description">
        {props.item.description.map((descriptionItem, index) => (
          <div key={index} className="description-item">
            {descriptionItem}
          </div>
        ))}
      </div>
      <input
        type="checkbox"
        className="favorite-checkbox"
        onClick={(e) => {
          e.stopPropagation();
          if (!isMarked) {
            dispatch(select(props.item));
            setIsMarked(true);
          } else {
            dispatch(unselect(props.item.uid));
            setIsMarked(false);
          }
        }}
      ></input>
    </li>
  );
};

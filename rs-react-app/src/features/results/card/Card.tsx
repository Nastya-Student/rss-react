import { type JSX } from 'react';
import type { ResponseItem } from '../../../api/interfaces/Response';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { select, unselect } from '../../flyout/flyout.slice';
import { selectFlyoutItemsIds } from '../../flyout/flyout.selectors';

type CardProps = {
  key: number;
  item: ResponseItem;
  onclickItem: (item: ResponseItem) => void;
  category: string;
};

export const Card = (props: CardProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const isMarked = useAppSelector(selectFlyoutItemsIds).includes(
    props.item.uid
  );

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
        checked={isMarked}
        className="favorite-checkbox"
        onChange={(e) => {
          e.stopPropagation();
          if (!isMarked) {
            dispatch(select(props.item));
          } else {
            dispatch(unselect(props.item.uid));
          }
        }}
      ></input>
    </li>
  );
};

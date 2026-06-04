import { type JSX } from 'react';
import type { ResponseItem } from '../../../api/interfaces/Response';
import { useAppSelector } from '../../../store/hooks';
import { selectFlyoutItemsIds } from '../../flyout/flyout.selectors';
import { CheckboxInput } from './CheckboxInput';

type CardProps = {
  key: number;
  index: number;
  item: ResponseItem;
  onclickItem: (item: ResponseItem) => void;
  category: string;
};

export const Card = (props: CardProps): JSX.Element => {
  const isMarked = useAppSelector(selectFlyoutItemsIds).includes(
    props.item.uid
  );

  return (
    <li
      key={props.index}
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
      <CheckboxInput isMarked={isMarked} item={props.item}></CheckboxInput>
    </li>
  );
};

import type { JSX } from 'react';
import type { ResponseItem } from '../../../api/interfaces/Response';
import { useAppDispatch } from '../../../store/hooks';
import { select, unselect } from '../../flyout/flyout.slice';

type CheckboxInput = {
  isMarked: boolean;
  item: ResponseItem;
};

export const CheckboxInput = (props: CheckboxInput): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <input
      type="checkbox"
      checked={props.isMarked}
      className="favorite-checkbox"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onChange={() => {
        if (!props.isMarked) {
          dispatch(select(props.item));
        } else {
          dispatch(unselect(props.item.uid));
        }
      }}
    ></input>
  );
};

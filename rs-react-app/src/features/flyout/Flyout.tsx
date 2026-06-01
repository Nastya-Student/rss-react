import type { JSX } from 'react';
import {
  selectFlyoutItems,
  selectItemsLength,
  unselectAll,
} from './flyout.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { downloadItems } from './downloadItems';

export const Flyout = (): JSX.Element => {
  const numberOfSelectedItems = useAppSelector(selectItemsLength);

  const dispatch = useAppDispatch();

  const items = useAppSelector(selectFlyoutItems);

  if (numberOfSelectedItems === 0) {
    return <></>;
  }

  return (
    <div className="selected-items-block">
      <p>Selected items: {numberOfSelectedItems}</p>
      <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
      <button onClick={() => downloadItems(items)}>Download</button>
    </div>
  );
};

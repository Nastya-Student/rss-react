import type { JSX } from 'react';
import { selectItemsLength, unselectAll } from './flyoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const Flyout = (): JSX.Element => {
  const numberOfSelectedItems = useAppSelector(selectItemsLength);

  const dispatch = useAppDispatch();

  if (numberOfSelectedItems === 0) {
    return <></>;
  }

  return (
    <div className="selected-items-block">
      <p>Selected items: {numberOfSelectedItems}</p>
      <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
      <button>Download</button>
    </div>
  );
};

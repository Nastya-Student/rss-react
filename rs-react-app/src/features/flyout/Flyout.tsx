import type { JSX } from 'react';
import { selectItemsLength } from './flyoutSlice';
import { useAppSelector } from '../../app/hooks';



export const Flyout = (): JSX.Element => {

  const numberOfSelectedItems = useAppSelector(selectItemsLength)
  return (
    <div className="selected-items-block">
      <p>Selected items: {numberOfSelectedItems}</p>
      <button>Unselect all</button>
      <button>Download</button>
    </div>
  );
};

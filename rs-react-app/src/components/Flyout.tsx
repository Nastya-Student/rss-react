import type { JSX } from 'react';

type SelectedProps = {
  selectedItems: number;
};

export const Flyout = (props: SelectedProps): JSX.Element => {
  return (
    <div className="selected-items-block">
      <p>Selected items: {props.selectedItems}</p>
      <button>Unselect all</button>
      <button>Download</button>
    </div>
  );
};

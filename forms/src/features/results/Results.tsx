import type { JSX } from 'react';
import { Card } from '../../components/Card';
import { useAppSelector } from '../../store/hooks';
import { selectAllItems } from '../../store/app.selectors';

export const Results = (): JSX.Element => {
  const items = useAppSelector(selectAllItems);

  return (
    <div className="block-results">
      <ul className="results-list">
        {items.map((item, index) => (
          <Card key={index} index={index} formData={item}></Card>
        ))}
      </ul>
    </div>
  );
};

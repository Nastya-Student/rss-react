import type { JSX } from 'react';
import { Card } from '../../components/Card';
import type { MyFormData } from '../../types/MyFormData';

type ResultsProps = {
  items: MyFormData[];
};

export const Results = (props: ResultsProps): JSX.Element => {
  return (
    <div className="block block-results">
      <ul className="results-list">
        {props.items.map((item, index) => (
          <Card key={index} index={index} formData={item}></Card>
        ))}
      </ul>
    </div>
  );
};

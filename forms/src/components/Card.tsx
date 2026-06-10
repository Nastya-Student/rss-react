import { type JSX } from 'react';
import type { MyFormData } from '../types/MyFormData';

type CardProps = {
  key: number;
  index: number;
  formData: MyFormData;
};

export const Card = (props: CardProps): JSX.Element => {
  return (
    <li key={props.index} className="card">
      {Array.from(Object.entries(props.formData)).map(([k, v]) => (
        <div key={k}>
          {k}: {String(v)}
        </div>
      ))}
    </li>
  );
};

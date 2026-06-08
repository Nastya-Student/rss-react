import { type JSX } from 'react';
import type { MyFormData } from '../types/MyFormData';

type CardProps = {
  key: number;
  index: number;
  formData: MyFormData;
};

export const Card = (props: CardProps): JSX.Element => {
  return <li key={props.index} className="list-item"></li>;
};

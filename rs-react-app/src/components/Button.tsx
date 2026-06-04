import type { JSX, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onclick?: () => void;
};

export const Button = (props: ButtonProps): JSX.Element => {
  return <button onClick={props.onclick}>{props.children}</button>;
};

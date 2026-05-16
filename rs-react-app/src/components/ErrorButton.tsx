import { useState, type JSX } from 'react';

export const ErrorButton = (): JSX.Element => {
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const onClickBtn = () => {
    setShouldThrowError(true);
  };

  if (shouldThrowError) {
    throw new Error('error simulation');
  }
  return <button onClick={onClickBtn}>Error</button>;
};

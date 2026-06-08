import type { JSX } from 'react/jsx-runtime';

type TopControlsProps = {
  className: string;
};

export const Forms = (props: TopControlsProps): JSX.Element => {
  return (
    <div className={props.className}>
      <button>U-Form</button>
      <button>RH-Form</button>
    </div>
  );
};

import React, { type ReactNode } from 'react';

type ErrorButtonProps = {
  children: ReactNode;
};

export class ErrorButton extends React.Component<ErrorButtonProps> {
  constructor(props: ErrorButtonProps) {
    super(props);
  }

  render() {
    return <button>{this.props.children}</button>;
  }
}

import React, { type ReactNode } from 'react';

type ErrorButtonProps = {
  children?: ReactNode;
};

type ErrorButtonState = {
  shouldThrowError: boolean;
};

export class ErrorButton extends React.Component<
  ErrorButtonProps,
  ErrorButtonState
> {
  constructor(props: ErrorButtonProps) {
    super(props);
    this.state = {
      shouldThrowError: false,
    };
  }

  onClickBtn = () => {
    this.setState({ shouldThrowError: true });
  };

  render() {
    if (this.state.shouldThrowError) {
      throw new Error('error simulation');
    }
    return <button onClick={this.onClickBtn}>Error</button>;
  }
}

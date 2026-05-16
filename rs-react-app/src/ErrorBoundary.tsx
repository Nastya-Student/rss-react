import React, { type ReactNode } from 'react';

type ErrorState = {
  hasError: boolean;
};

type ErrorProps = {
  children?: ReactNode;
};

export class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className="error-header">
          Something went wrong. Reload this page.
        </h2>
      );
    }

    return this.props.children;
  }
}

function logErrorToMyService(error: Error, errorInfo: React.ErrorInfo) {
  console.error(error, errorInfo.componentStack);
}

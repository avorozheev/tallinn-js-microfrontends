import type { ReactNode, ErrorInfo } from 'react';
import { Component } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

export class MicrofrontendErrorBoundary extends Component<{ children: ReactNode}, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      'Error loading microfrontend',
      error,
      errorInfo
    );
  }

  public render() {
    if (this.state.hasError) {
      return <div>We experienced a problem loading module, please, revisit this page later or enojy our other pages</div>;
    }

    return this.props.children;
  }
}

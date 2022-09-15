import {lazy, Suspense} from 'react';
import {MicrofrontendErrorBoundary} from "../../containers/error-boundary/microfrontend/MicrofrontendErrorBoundary";

const Connector = lazy(() => import('./Connector').then(m => ({default: m.Connector})));

export const Dashboard = () => {
  return (
    <div>
      <MicrofrontendErrorBoundary>
        <Suspense fallback="Loading dashboard...">
          <Connector/>
        </Suspense>
      </MicrofrontendErrorBoundary>
    </div>
  )
}
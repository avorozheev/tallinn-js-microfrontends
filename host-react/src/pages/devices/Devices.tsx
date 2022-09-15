import {lazy, Suspense} from 'react';
import {MicrofrontendErrorBoundary} from "../../containers/error-boundary/microfrontend/MicrofrontendErrorBoundary";

const Connector = lazy(() => import('./Connector').then(m => ({default: m.Connector})));

export const Devices = () => {
  return (
    <div>
      <MicrofrontendErrorBoundary>
        <Suspense fallback="Loading microfrontend...">
          <Connector/>
        </Suspense>
      </MicrofrontendErrorBoundary>
    </div>
  )
}
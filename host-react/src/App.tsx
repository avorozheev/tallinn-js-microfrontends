import React from 'react';
import './App.scss';
import {RoutesConfiguration} from "./containers/routes-configuration";
import {ToastsProvider} from "./context/toasts/ToastsContext";

function App() {
  return (
    <div className="App">
      <ToastsProvider>
        <RoutesConfiguration/>
      </ToastsProvider>
    </div>
  );
}

export default App;

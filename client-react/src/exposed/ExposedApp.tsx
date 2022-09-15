import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import React from "react";
import {App} from "../App";
import {MemoryHistory} from "history";
import {MainContext} from "../context/MainContext";

type Props = {
  baseUrl: string
  history: MemoryHistory,
  displayToast: (text: string) => void,
  displayCopyright: boolean
}

export const ExposedApp = ({history, baseUrl, displayToast, displayCopyright}: Props) => {
  return (
    <div>
      <MainContext.Provider value={{baseUrl, displayToast}}>
        <HistoryRouter history={history}>
          <App displayCopyright={displayCopyright} />
        </HistoryRouter>
      </MainContext.Provider>
    </div>
  )
}
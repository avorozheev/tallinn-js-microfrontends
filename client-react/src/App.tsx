import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router";
import {Summary} from "./pages/summary";
import {Detailed} from "./pages/detailed";
import {MainContext} from "./context/MainContext";
import {Copyright} from "./containers/copyright/Copyright";

type Props = {
  displayCopyright: boolean
}

export const App = ({displayCopyright}: Props) => {
  const {baseUrl} = useContext(MainContext)

  return (
    <div>
      <Routes>
        <Route path={`/${baseUrl}/*`}>
          <Route index element={<Summary />} />
          <Route path="more" element={<Detailed />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to={`/${baseUrl}`} />}
        />
      </Routes>

      {displayCopyright && <Copyright />}
    </div>
  );
}

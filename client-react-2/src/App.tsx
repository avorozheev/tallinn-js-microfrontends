import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router";
import {MainContext} from "./context/MainContext";
import {Collection} from "./pages/collection";
import {Device} from "./pages/device";

import styles from './app.module.scss';

export const App = () => {
  const {baseUrl} = useContext(MainContext)

  return (
    <div className={styles.devicesApp}>
      <Routes>
        <Route path={`/${baseUrl}/*`}>
          <Route index element={<Collection />} />
          <Route path=":id" element={<Device />} />
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
    </div>
  );
}

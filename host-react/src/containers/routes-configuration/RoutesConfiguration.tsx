import {BrowserRouter, unstable_HistoryRouter as HistoryRouter, Router, Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/dashboard";
import {Users} from "../../pages/users";
import {Navigation} from "../navigation";
import {Settings} from "../../pages/settings";
import React from "react";
import './style.css'
import {routesHistory} from "./utils";
import {Devices} from "../../pages/devices";

export const RoutesConfiguration = () => {

    return (
      <HistoryRouter history={routesHistory}>
        <Navigation />

        <div className="RouteOutlet">
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/devices/*" element={<Devices />} />
          </Routes>
        </div>
      </HistoryRouter>
    )
}
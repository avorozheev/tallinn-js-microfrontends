import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import {mount} from 'devicesModule/DevicesBusiness';
import {routesHistory} from "../../containers/routes-configuration/utils";
import {ToastsContext} from "../../context/toasts/ToastsContext";

const baseName = '/devices'

const Connector = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const location = useLocation()
  const navigate = useNavigate()

  const {displayToast} = useContext(ToastsContext)

  useEffect(() => {
      if (!ref?.current) {
        return;
      }

      const {onParentNavigate, onUnmount} = mount(ref.current, {
        baseUrl: 'devices',
        initialPath: location.pathname,
        onNavigate: ({pathname: nextPathname}) => {
          const {pathname} = location;

          if (pathname !== nextPathname) {
            navigate(nextPathname)
          }
        },
        displayToast,
      });

      routesHistory.listen(({location}) => {
        if(location.pathname.startsWith(baseName)) {
          onParentNavigate(location.pathname)
        }
      })

      return () => {
        console.log('Unm')
        onUnmount();
      };
    },
    []
  );

  return (
    <div ref={ref}/>
  );
};

export {
  Connector,
};

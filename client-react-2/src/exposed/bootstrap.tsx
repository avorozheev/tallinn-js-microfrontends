import {createMemoryHistory} from 'history';
import ReactDOM from "react-dom";
import {Connector} from "./types";
import {ExposedApp} from "./ExposedApp";

export const bootstrap: Connector = (el, options) => {
  const {baseUrl, initialPath, onNavigate, displayToast} = options

  const history = createMemoryHistory({
    initialEntries: [initialPath],
  });

  history.listen(({location}) => {
    onNavigate(location);
  });

  ReactDOM.render(
    <ExposedApp
      baseUrl={baseUrl}
      history={history}
      displayToast={displayToast}
    />,
    el
  );

  return {
    onParentNavigate: (nextPathname: string) => {
      const {pathname} = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
    onUnmount: () => {
      ReactDOM.unmountComponentAtNode(el);
    },
  };
}
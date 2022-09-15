import {bootstrap} from "../bootstrap";
import {MicrofrontendConnector} from "../types";

import './pollute-styles.scss'

export const mount: MicrofrontendConnector = (el, options) => {
  return bootstrap(el, {
    ...options,
    displayCopyright: false
  })
}
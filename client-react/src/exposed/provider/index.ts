import {bootstrap} from "../bootstrap";
import {MicrofrontendConnector} from "../types";

export const mount: MicrofrontendConnector = (el, options) => {
  return bootstrap(el, {
    ...options,
    displayCopyright: true
  })
}
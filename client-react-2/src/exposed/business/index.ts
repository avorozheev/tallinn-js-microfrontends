import {bootstrap} from "../bootstrap";
import {Connector} from "../types";

export const mount: Connector = (el, options) => {
  return bootstrap(el, options)
}
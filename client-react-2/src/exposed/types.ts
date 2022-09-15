import {Location} from "history";

type Options = {
  baseUrl: string;
  initialPath: string;
  onNavigate: (location: Location) => void;
  displayToast: (text: string) => void;
};

type Result = {
  onParentNavigate: (nextPathname: string) => void;
  onUnmount: () => void;
};

export type Connector = (el: HTMLDivElement, options: Options) => Result
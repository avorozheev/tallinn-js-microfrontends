import {Location} from "history";

type MicrofrontendOptions = {
  baseUrl: string;
  initialPath: string;
  onNavigate: (location: Location) => void;
  displayToast: (text: string) => void;
}

export type EntryPointOptions = {
  displayCopyright: boolean
}

type Options = MicrofrontendOptions & EntryPointOptions

type Result = {
  onParentNavigate: (nextPathname: string) => void;
  onUnmount: () => void;
};

export type MicrofrontendConnector = (el: HTMLDivElement, options: MicrofrontendOptions) => Result

export type Connector = (el: HTMLDivElement, options: Options) => Result
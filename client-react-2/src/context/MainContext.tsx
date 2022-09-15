import {createContext} from "react";

type State = {
  baseUrl: string,
  displayToast: (text: string) => void
}

export const MainContext = createContext<State>({
  baseUrl: '',
  displayToast: () => {}
})
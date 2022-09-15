import {createContext, ReactNode} from "react";
import {useToasts} from "../../hooks/useToasts";
import './toasts.scss'
import {Toast} from "./Toast";

type State = {
  toasts: string[],
  displayToast: (text: string) => void
}

export const ToastsContext = createContext<State>({
  toasts: [],
  displayToast: (text) => {},
})

type Props = {
  children?: ReactNode
}

export const ToastsProvider = ({children}: Props) => {
  const {toasts, displayToast} = useToasts()

  return (
    <ToastsContext.Provider value={{toasts, displayToast}}>
      {toasts.length > 0 && (
        <div className='toastsContainer'>
          {toasts.map((text, index) => (
            <Toast text={text} key={index}/>
          ))}
        </div>
      )}
      {children}
    </ToastsContext.Provider>
  )
}
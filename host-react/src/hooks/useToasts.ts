import {useEffect, useReducer} from "react";

type ToastsState = {
  collection: string[]
}

type ToastAction = {
  type: 'push' | 'unshift',
  payload: string
}

type Result = {
  displayToast: (text: string) => void,
  toasts: string[]
}

const reducer = (state: ToastsState, action: ToastAction): ToastsState => {
  const {type, payload} = action
  switch (type) {
    case 'push':
      return {
        collection: [...state.collection, payload],
      }
    case 'unshift':
      const [, ...other] = state.collection

      return {
        collection: [...other]
      }
    default:
      return state
  }
}

const initialState: ToastsState = {
  collection: []
}

export const useToasts = (): Result => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayToast = (text: string) => dispatch({type: 'push', payload: text})

  useEffect(() => {
    if(state.collection.length === 0) {
      return
    }

    setTimeout(() => {
      dispatch({type: 'unshift', payload: ''})
    }, 1500)

  }, [state.collection])

  return {
    displayToast,
    toasts: state.collection
  }
}
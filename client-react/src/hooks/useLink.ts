import {useContext} from "react";
import {MainContext} from "../context/MainContext";

export const useLink = () => {
  const {baseUrl} = useContext(MainContext)

  return (suffix: string | null = null) => {
    return suffix ? `${baseUrl}/${suffix}` : baseUrl
  }
}
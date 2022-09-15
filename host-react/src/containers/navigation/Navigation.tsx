import {NavLink} from "react-router-dom";
import './styles.css'
import {useContext} from "react";
import {ToastsContext} from "../../context/toasts/ToastsContext";

const text = 'Today is my lucky day'

export const Navigation = () => {
  const {displayToast} = useContext(ToastsContext)

  return (
    <div className="Navigation">
      <NavLink
        to="/dashboard"
        className={({isActive}) => isActive ? 'active' : ''}>
        Dashboard
      </NavLink>
      <NavLink
        to="/users"
        className={({isActive}) => isActive ? 'active' : ''}>
        Users
      </NavLink>
      <NavLink
        to="/settings"
        className={({isActive}) => isActive ? 'active' : ''}>
        Settings
      </NavLink>
      <NavLink
        to="/devices"
        className={({isActive}) => isActive ? 'active' : ''}>
        Devices
      </NavLink>
      <button className='buttonSecondary' onClick={() => displayToast(text)}>
        I am feeling lucky
      </button>
    </div>
  )
}
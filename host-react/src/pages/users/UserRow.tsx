import {User} from "./types";
import {useContext} from "react";
import {ToastsContext} from "../../context/toasts/ToastsContext";

type Props = User& {
  index: number,
}

export const UserRow = (props: Props) => {
  const {displayToast} = useContext(ToastsContext)

  const text = `${props.firstName} ${props.lastName} is deactivated`

  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
      <td>{props.email}</td>
      <td>{props.phoneNumber}</td>
      <td>
        <button className='buttonSecondary' onClick={() => displayToast(text)}>
          Deactivate
        </button>
      </td>
    </tr>
  )
}
import {Device} from "../../types";
import {Link} from "react-router-dom";

export const DeviceRow = (props: Device) => {
  return (
    <tr>
      <td>
        {props.type}
      </td>
      <td>
        {props.os}
      </td>
      <td>
        {props.friendlyName}
      </td>
      <td>
        {props.registeredAt.toDateString()}
      </td>
      <td>
        {props.isLicensed ? 'Yes' : 'No'}
      </td>
      <td>
        {props.licensedUntil?.toDateString() || '-'}
      </td>
      <td>
        <Link to={props.id}>Details</Link>
      </td>
    </tr>
  )
}
import {devices} from "../../data";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {PageHeader} from "../../containers/page-header";

export const Device = () => {
  const {id} = useParams<{id: string}>()

  const device = devices.find(d => d.id === id)

  if(!device) {
    return (
      <div>Device not found</div>
    )
  }

  return (
    <div>
      <PageHeader>
        <div>
          <Link to='/devices'>Devices</Link>
        </div>

        <h1>{device.friendlyName}</h1>
      </PageHeader>

      <div>
        {JSON.stringify(device)}
      </div>
    </div>
  )
}
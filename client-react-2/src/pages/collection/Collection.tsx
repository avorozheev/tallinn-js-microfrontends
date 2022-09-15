import {DeviceRow} from "./DeviceRow";
import {devices} from "../../data";

import styles from './styles.module.scss';
import {PageHeader} from "../../containers/page-header";

export const Collection = () => {
  return (
    <div>
      <PageHeader>
        <h1>My devices</h1>
      </PageHeader>

      <table className={styles.devicesTable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>OS</th>
            <th>Friendly name</th>
            <th>Registered at</th>
            <th>Is licensed</th>
            <th>Licensed until</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {devices.map(d => <DeviceRow key={d.id} {...d} />)}
        </tbody>
      </table>
    </div>
  )
}
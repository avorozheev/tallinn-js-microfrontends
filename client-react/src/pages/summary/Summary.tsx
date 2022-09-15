import styles from './styles.module.scss';
import {Link} from "react-router-dom";

export const Summary = () => {
  return (
    <div className={styles.summaryArea}>
      <h1 className={styles.header}>
        Summary
      </h1>

      <div className={styles.link}>
        <Link to="more">View detailed statistics</Link>
      </div>

      <div className={styles.graphs}>
        <div className={styles.graphBlock}>
          Graph 1
        </div>

        <div className={styles.graphBlock}>
          Graph 2
        </div>
      </div>

    </div>
  )
}
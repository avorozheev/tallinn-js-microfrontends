import styles from './styles.module.scss';
import {ReactNode} from "react";

type Props = {
  children: ReactNode
}

export const PageHeader = ({children}: Props) => {
  return (
    <div className={styles.pageHeader}>
      {children}
    </div>
  )
}
import styles from './styles.module.scss';
import {Link} from "react-router-dom";
import {useLink} from "../../hooks/useLink";
import {useContext} from "react";
import {MainContext} from "../../context/MainContext";

const statistics = [
  {
    firstName: 'John',
    payslip: '200 SEK'
  },
  {
    firstName: 'Paul',
    payslip: '100 SEK'
  },
  {
    firstName: 'George',
    payslip: '300 SEK'
  },
  {
    firstName: 'Ringo',
    payslip: '150 SEK'
  },
]

export const Detailed = () => {
  const link = useLink()

  const {displayToast} = useContext(MainContext)

  return (
    <div className={styles.detailedArea}>
      <h1 className={styles.header}>
        Detailed
      </h1>

      <div>
        <Link to={link()}>Back</Link>
      </div>

      <div>
        <button onClick={() => displayToast('Toast from MF')}>Show toast from MF</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Latest payslip</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map((row, index) => (
            <tr>
              <td>
                {index+1}
              </td>
              <td>
                {row.firstName}
              </td>
              <td>
                {row.payslip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
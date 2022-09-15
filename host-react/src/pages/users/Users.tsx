import {useContext} from "react";
import {ToastsContext} from "../../context/toasts/ToastsContext";
import {User} from "./types";
import {UserRow} from "./UserRow";
import './styles.scss'

const text = 'Your user was successfully created, now you can proceed with the authentication.'

const users: User[] = [
  {firstName: 'John', lastName: 'Doe', age: 28, email: 'john.doe@yahoo.com', phoneNumber: '5553 23 33'},
  {firstName: 'Jane', lastName: 'Doe', age: 44, email: 'jane.doe@yahoo.com', phoneNumber: '9383 90 67'},
  {firstName: 'Iris', lastName: 'Badger', age: 13, email: 'iris.badger@yahoo.com', phoneNumber: '9837 09 47'},
  {firstName: 'Miriam', lastName: 'Toad', age: 78, email: 'miriam.toad@yahoo.com', phoneNumber: '1028 37 61'},
]

export const Users = () => {
  const {displayToast} = useContext(ToastsContext)

  return (
    <div>
      <h1>
        Users list
      </h1>

      <div>
        <button className='buttonPrimary' onClick={() => displayToast(text)}>
          Create user
        </button>
      </div>

      <table className='usersTable'>
        <thead>
          <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow key={index} index={index} {...user}/>
          ))}
        </tbody>
      </table>

    </div>
  )
}
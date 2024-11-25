import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice';

const UserTable = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserTable;

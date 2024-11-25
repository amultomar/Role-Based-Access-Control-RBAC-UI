import React from 'react';
import { useSelector } from 'react-redux';

const RoleTable = () => {
  const roles = useSelector(state => state.roles);

  return (
    <section>
      <h2>Manage Roles</h2>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RoleTable;

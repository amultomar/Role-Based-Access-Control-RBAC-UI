import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <header>
        <h1>Role-Based Access Control Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/roles">Roles</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2024 RBAC System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

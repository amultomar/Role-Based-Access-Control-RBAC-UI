import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserTable from './components/UserTable';
import RoleTable from './components/RoleTable';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/users" element={<UserTable />} />
          <Route path="/roles" element={<RoleTable />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

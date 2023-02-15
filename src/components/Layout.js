import React from 'react';
import Navbar from './Navbar/Navbar';
import Divider from './Divider/Divider';

function Layout({ children, loggedIn, handleLogout }) {
  return (
    <div>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Divider />
      {children}
    </div>
  );
}

export default Layout;

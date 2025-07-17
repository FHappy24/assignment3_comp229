import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/signin" style={{ marginRight: 10 }}>Sign In</Link>
      <Link to="/signup" style={{ marginRight: 10 }}>Sign Up</Link>
      <Link to="/education" style={{ marginRight: 10 }}>Education</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;

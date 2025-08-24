import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">ArtVault</Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
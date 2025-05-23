import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <h1>Login Page </h1>
      <div>
        {!user && (
          <>
            <Link to="/">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

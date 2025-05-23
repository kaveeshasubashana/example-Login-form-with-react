import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <div className="profile">
        <h2>Please login to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="profile">
      <h2>Welcome, {user.name}!</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default Profile;

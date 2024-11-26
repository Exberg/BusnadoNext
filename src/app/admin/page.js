import React from 'react';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  return (
    <div className="admin-login-page">
      <div className="background">
        <div className="user">
          <div className="icon"></div>
        </div>
        <div className="login-as-admin">Login as Admin</div>

        <div className="input-user">
          <div className="user-icon">
            <div className="icon"></div>
          </div>
          <div className="username">Username</div>
        </div>

        <div className="input-pass">
          <div className="password-icon">
            <div className="icon"></div>
          </div>
          <div className="password">Password</div>
        </div>

        <div className="button-login">
          <div className="login-icon">
            <div className="icon"></div>
          </div>
          <div className="login-text">login</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

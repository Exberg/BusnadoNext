'use client';

import React from 'react';
import { useRouter } from "next/navigation";   // Import for React Router
import './AdminLoginPage.css';

const AdminLoginPage = () => {

  const router = useRouter();
  return (
    <div className="admin-login-page">
      <div className="background">
        <div className="user">
          <img src="/user.svg" alt="user logo" />
        </div>
        <div className="login-as-admin">Login as Admin</div>

        <div className="input-user">
          <div className="user-icon">
            <img src="/user.svg" alt="user logo" className="u-icon"/>
          </div>
          <input
          type="text"
          id="username"
          className="username"
          placeholder="Username"
          aria-label="Username" //help user who rely on screen readers
          ></input>
        </div>

        <div className="input-pass">
          <div className="password-icon">
            <img src="/password01.png" alt="pw logo" />
          </div>
          <input
          type="text"
          id="password"
          className="password"
          placeholder="Password"
          aria-label="Password" //help user who rely on screen readers
          ></input>
        </div>
        
        <button className="login-btn" 
        onClick={() => router.push("/admin/feedback-list")}>
          <img src="/login.svg" alt="login logo" />
          <div className="login-text">login</div>
        </button>
        
      </div>
    </div>
  );
};

export default AdminLoginPage;

'use client';

import React from 'react';
import { useRouter } from "next/navigation";   // Import for React Router
import './AdminLoginPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faRightToBracket} from "@fortawesome/free-solid-svg-icons";

const AdminLoginPage = () => {

  const router = useRouter();
  return (
    <div className="admin-login-page">
      <div className="background">
        <div className="user">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <div className="login-as-admin">Login as Admin</div>
        <div className="input-user">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser} />
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
            <FontAwesomeIcon icon={faKey} />
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
            <FontAwesomeIcon icon={faRightToBracket} />
          <div className="login-text">login</div>
        </button>
        
      </div>
    </div>
  );
};

export default AdminLoginPage;

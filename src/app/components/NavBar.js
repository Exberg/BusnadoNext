"use client";

import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            <div className="logo-container">
                <img src="/assets/logo192.png" alt="Logo" className="logo" />
                <h2 className="logo-text">Busnado</h2>
            </div>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/feedback">Feedback</a>
                <a href="/manual">Manual</a>
                <a href="/about">About</a>
                <a href="/admin">Admin</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="nav-outer">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link href="/">
        <a className="navbar-brand">
          <img className="nav-logo" src="/static/img/logo_long.png" alt="Logo" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggle}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/schedule">
              <a className="nav-link">Schedule</a>
            </Link>
          </li>
          <li className="nav-item last-nav-item">
            <Link href="/register">
              <a className="nav-link">Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
      <style jsx>{`
        .navbar {
          background-color: white;
        }

        .nav-link {
          border-radius: 5px;
          font-size: 25px;
          text-align: center;
          color: black;
          font-weight: bold;
        }

        @media (min-width: 600px) {
            .nav-link {
              margin-left: 50px;
              border-radius: 5px;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            .collapse {
                justify-content: flex-end;
            }
            .last-nav-item {
                margin-right: 20px;
            }
            .nav-logo {
                height: 50px;
                margin-left: 20px;
                margin-top: 15px;
                margin-bottom: 15px;
            }
        }

        @media (max-width: 599px){
            .nav-logo {
                width: 50vw;
                margin-left: 20px;
                margin-top: 15px;
                margin-bottom: 15px;
            }
        }

        .nav-link:hover {
          background-color: #212529;
          color: white;
        }
        .nav-item {
        }
      `}</style>
        </div>
  );
};

export default Navbar;

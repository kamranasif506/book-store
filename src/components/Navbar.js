import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import classNames from 'classnames';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const iconListItemStyle = {
    border: '1px solid black',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className={classNames('navbar-brand', styles.logoName)} to="/">
          Math Magicians
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item border-right">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item  border-right">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>

            {/* Add more menu items here */}
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item border-right" style={iconListItemStyle}>
              <FaUser className={styles.circleIcon} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

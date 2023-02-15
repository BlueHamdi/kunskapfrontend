import styles from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <div className={styles.all}>
      <div className={styles.logo}>
        Kunskapsvarvet.
      </div>
      <nav className={styles.item}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.li}>
            <Link to="/play" className={styles.link}>Play</Link>
          </li>
          <li className={styles.li}>
            <Link to="/practice" className={styles.link}>Practice</Link>
          </li>
          <li className={styles.li}>
            <Link to="/highscores" className={styles.link}>High Scores</Link>
          </li>
          <li className={styles.li}>
            <Link to="/contact" className={styles.link}>Contacts</Link>
          </li>
          {loggedIn ? (
            <li className={styles.li}>
              <button onClick={handleLogout} className={styles.link}>Logout</button>
            </li>
          ) : (
            <li className={styles.li}>
              <Link to="/login" className={styles.link}>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

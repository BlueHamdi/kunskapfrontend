import styles from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className= {styles.all}>
      <div className= {styles.logo}>
        Kunskapsvarvet.
      </div>
    <nav className={styles.item}>
      <ul className={styles.ul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/play">Play</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;


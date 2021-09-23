import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className={styles.container}>
    <Link to='/' className={styles.title}>
    <h1 className={styles.title}>Weather App</h1>
    </Link>
    <SearchBar onSearch={onSearch}/>
    <Link to='/about' className={styles.about}><h4>About</h4></Link>

    </nav>
  );
};

export default Nav;

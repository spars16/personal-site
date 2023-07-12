import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link className={styles.logoLink} to="/">SPARSH SRIVASTAVA</Link>
            </div>
            <div className={styles.spacer} />
            <div className={styles.nav}>
                <Link className={styles.navLink} to="/about">ABOUT</Link>
                <div className={styles.shortSpacer} />
                <Link className={styles.navLink} to="/projects">PROJECTS</Link>
                <div className={styles.shortSpacer} />
                <Link className={styles.navLink} to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;
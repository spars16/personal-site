import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className="sidebar__logo">
                <h1>Sparsh Srivastava</h1>
            </div>
            <div className="sidebar__nav">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Sidebar
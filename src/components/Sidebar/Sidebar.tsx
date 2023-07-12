import React from 'react'
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Slideshow from '../Slideshow/Slideshow'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            {/* <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/56163551?v=4" alt="Sparsh Srivastava" />
                <h2 className={styles.profileText}>SPARSH SRIVASTAVA</h2>
            </div> */}
            <div className={styles.slides}>
                <Slideshow />
            </div>
            <div className={styles.spacer} />
            <div className={styles.about}>
                <span className={styles.aboutText}>ABOUT</span>
                <span className={styles.p}>
                    I am a full stack developer with a passion for learning and teaching.
                    I love working with React and Node.js, but I'm always learning.
                </span>
                <NavLink className={styles.sidebarButton} to="/about">LEARN MORE</NavLink>
            </div>
        </div>
    )
}

export default Sidebar
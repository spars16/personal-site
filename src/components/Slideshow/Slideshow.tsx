import React, { useState } from 'react';

import styles from './Slideshow.module.css';

const Slideshow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

    const incrementSlideIndex = (index: number) => {
        setCurrentSlideIndex(currentSlideIndex + index);
    }

    setTimeout(() => {
        setCurrentSlideIndex(currentSlideIndex + 1);
    }, 2000);

    return (
        <div className={styles.slideshow}>
            <div className={styles.slideshowContainer}>
                <div className={styles.slide}>
                    <div className={styles.numberText}>1 / 3</div>
                    <img src="img1.jpg" className={styles.image} alt="" />
                    <div className={styles.text}>Caption Text</div>
                </div>

                <div className={styles.slide}>
                    <div className={styles.numberText}>2 / 3</div>
                    <img src="img2.jpg" className={styles.image} alt="" />
                    <div className={styles.text}>Caption Two</div>
                </div>

                <div className={styles.slide}>
                    <div className={styles.numberText}>3 / 3</div>
                    <img src="img3.jpg" className={styles.image} alt="" />
                    <div className={styles.text}>Caption Three</div>
                </div>

                <button className={styles.prev} onClick={() => incrementSlideIndex(-1)}>&#10094;</button>
                <button className={styles.next} onClick={() => incrementSlideIndex(1)}>&#10095;</button>
            </div>

            <div className={styles.dotContainer}>
                <span className={styles.dot} onClick={() => setCurrentSlideIndex(1)} />
                <span className={styles.dot} onClick={() => setCurrentSlideIndex(2)} />
                <span className={styles.dot} onClick={() => setCurrentSlideIndex(3)} />
            </div>
        </div>
    )
}

export default Slideshow
import React from 'react'
import { getImageUrl } from '../../utils.js';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleName}>
            <h1 className={styles.title}>Hey, it's</h1>
            <h1 className={styles.name}>Charlie</h1>
          </div>
            <p className={styles.description}>I'm a software developer</p>
          <a href="mailto:charlesjpaguia@gmail.com" className={styles.contactBtn}>
            Contact me
          </a>
        </div>
        <img 
          src={getImageUrl('hero/Headshot.png')} 
          alt="Hero image of me"
          className={styles.heroImg}
        />
        {/* <div className={styles.topBlur} />
        <div className={styles.bottomBlur} /> */}
    </section>
  );
};

export default Hero;
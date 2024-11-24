import React from 'react'
import styles from './AboutMeContent.module.css';

function AboutMeContent( title , content ) {
  return (
    <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{content}</p>
    </div>
  );
};

export default AboutMeContent;
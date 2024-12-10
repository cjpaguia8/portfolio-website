import React from 'react';
import styles from './Bar.module.css';

const Bar = () => {
  return <div className={styles.bar}>
    <div className={styles.top}></div>
    <div className={styles.middle}></div>
    <div className={styles.bottom}></div>
  </div>;
};

export default Bar;
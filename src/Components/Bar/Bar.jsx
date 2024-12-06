import React from 'react';
import styles from './Bar.module.css';

const Bar = () => {
  return <div className={styles.bar}>
    <div className={styles.top}>1</div>
    <div className={styles.middle}>2</div>
    <div className={styles.bottom}>3</div>
  </div>;
};

export default Bar;
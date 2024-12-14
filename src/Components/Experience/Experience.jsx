import { getImageUrl } from '../../utils.js';
import styles from './Experience.module.css';
import data from '../../data/data.json';

const Experience = () => {
    return (
    <section className={styles.expSection}>
      <h1>Experience</h1>
      <div className={styles.expBox}>
      {data.experience.map((expobj, index) => (
          <div className={styles.expobj} key={index}>
            <p className={styles.position}>{expobj.position}</p>
            <p className={styles.company}>{expobj.company}</p>
            <p className={styles.dates}>{expobj.dates}</p>
            <p className={styles.description}>{expobj.description}</p>
          </div>
      ))}
      </div>
    </section>
    );
}

export default Experience;
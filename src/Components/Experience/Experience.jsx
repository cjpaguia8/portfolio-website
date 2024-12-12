import { getImageUrl } from '../../utils.js';
import styles from './Experience.module.css';
import data from '../../data/data.json';

const Experience = () => {
    return (
    <section className={styles.experience}>
      <h1>Experience</h1>
      <div>
      {data.experience.map((expobj, index) => (
          <div className={styles.expobj} key={index}>
            <h1 className={styles.position}>{expobj.position}</h1>
            <h2 className={styles.company}>{expobj.company}</h2>
            <h3 className={styles.dates}>{expobj.dates}</h3>
            <p className={styles.description}>{expobj.description}</p>
          </div>
      ))}
      </div>
    </section>
    );
}

export default Experience;
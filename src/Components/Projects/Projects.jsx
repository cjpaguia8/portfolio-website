import { getImageUrl } from '../../utils.js';
import styles from './Projects.module.css';
import data from '../../data/data.json';

const Projects = () => {
    return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <div>
      {data.projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <h1 className={styles.title}>{project.title}</h1>
            <h2 className={styles.dates}>{project.dates}</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
      ))}
      </div>
    </section>
    );
}

export default Projects;
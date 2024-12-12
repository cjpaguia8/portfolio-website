import styles from './Skills.module.css';
import data from '../../data/data.json';
import Grid2 from '@mui/material/Grid2';

const Skills = () => {
  return (
    // <Grid2 />


    <section className={styles.content}>
      <p>Skills</p>
      <div className={styles.skillBox}>
        {data.skills.map((skill, index) => {
        return (
            <div className={styles.skill} key={index}>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;


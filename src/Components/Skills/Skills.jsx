import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from './Skills.module.css';
import data from '../../data/data.json';

const Skills = () => {
  return (
    <section className={styles.content}>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.skillBox}>
        {data.skills.map((skill, index) => (
          <Grid key={index} size={1.5} className={styles.skill}>
            <img src={skill.image} alt={skill.name}/>
            <p>{skill.name}</p>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;


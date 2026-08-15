import { getImageUrl } from '../../utils.js';
import styles from './AboutMe.module.css';
import data from '../../data/data.json';

const AboutMe = () => {
    return (
    <section className={styles.content}>
        <div>
            {data.hobbies.map((hobby, index) => {
            return (
                <div className={styles.hobby} key={index} style={ (index % 2 == 1) ? { color:'red'} : {color : 'blue'} }>
                    <h1 className={styles.title}>{hobby.title}</h1>
                    <p className={styles.description}>{hobby.description}</p>
                </div>
            );
            })}
        </div>
    </section>
    );
}

export default AboutMe;
import { getImageUrl } from '../../utils.js';
import styles from './AboutMe.module.css';
import Hobby from '../Hobby/Hobby.jsx';
import data from '../../data/data.json';

const AboutMe = () => {
    return (
    <section className={styles.content}>
        <div>
            {data.hobbies.map((hobby, index) => (
                <Hobby key={index} title={hobby.title} description={hobby.description} />
            ))}
        </div>
    </section>
    );
}

export default AboutMe;
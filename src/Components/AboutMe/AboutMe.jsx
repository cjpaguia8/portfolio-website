import { getImageUrl } from '../../utils.js';
import styles from './AboutMe.module.css';
import AboutMeContent from './AboutMeContent/AboutMeContent.jsx';


export default function AboutMe() {
    return (
    <ul className={styles.content}>
        <div>
            <h1 className={styles.title}>Software Developer</h1>
            <p className={styles.description}>I'm a software developer with experience in building automative business processess</p>
        </div>
        <div>
            <h1 className={styles.title}>Audiovisual Artist</h1>
            <p className={styles.description}>In freetime I enjoy coding audio-reactive visual art</p>
        </div>
        <div>
            <h1 className={styles.title}>Musician</h1>
            <p className={styles.description}>Over 16+ years of playing classical and jazz piano along with a hobby for creating modular synthesizers</p>
        </div>
    </ul>
    );




    // <div style='m-8'>
    <div className={styles.about}>
        <img 
        src={getImageUrl('hero/Headshot.png')} 
        alt="Hero image of me"
        className={styles.aboutImg}
        />
        <div className={styles.content}>
            {/* <AboutMeContent title={'Hello'} content={'World'}/> */}
            <div>
                <h1 className={styles.title}>Software Developer</h1>
                <p className={styles.description}>I'm a software developer with experience in building automative business processess</p>
            </div>
            <div>
                <h1 className={styles.title}>Audiovisual Artist</h1>
                <p className={styles.description}>In freetime I enjoy coding audio-reactive visual art</p>
            </div>
            <div>
                <h1 className={styles.title}>Musician</h1>
                <p className={styles.description}>Over 16+ years of playing classical and jazz piano along with a hobby for creating modular synthesizers</p>
            </div>
        </div>
    </div>
        // <div className={styles.about}>ABOUT ME</div>
    // );
}
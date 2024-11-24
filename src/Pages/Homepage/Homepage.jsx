import Landing from "../../Components/Landing/Landing.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Hero />
            <AboutMe />
        </div>
    );
};

export default Homepage;
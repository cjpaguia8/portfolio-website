import Landing from "../../Components/Landing/Landing.jsx";
import Bar from "../../Components/Bar/Bar.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Landing />
            <Bar />
            <AboutMe />
        </div>
    );
};

export default Homepage;
import Landing from "../../Components/Landing/Landing.jsx";
import Bar from "../../Components/Bar/Bar.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import Experience from "../../Components/Experience/Experience.jsx";
import Projects from "../../Components/Projects/Projects.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Landing />
            <Bar />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
};

export default Homepage;
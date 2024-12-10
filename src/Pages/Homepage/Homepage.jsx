import Landing from "../../Components/Landing/Landing.jsx";
import Bar from "../../Components/Bar/Bar.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
// import FloatingColumn from "../../Components/FloatingColumn/FloatingColumn.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Landing />
            <Bar />
            {/* <Skills /> */}
            <AboutMe />
            {/* <FloatingColumn /> */}
        </div>
    );
};

export default Homepage;
import videoBg from '../../../assets/outputflip.mp4';
// import videoBg from '../../../assets/LiquidAcid.mp4';
import styles from "./Landing.module.css";
import WebGLCanvas from "../WebGLCanvas/WebGLCanvas.jsx";
import ThreeJSCanvas from "../ThreeJSCanvas/ThreeJSCanvas.jsx";
import ThreeJSTriangle from "../ThreeJSCanvas/ThreeJSTriangle.jsx";

const Landing = () => {
    return (
        <div className={styles.landing}>
            {/* <ThreeJSCanvas /> */}
            {/* <ThreeJSTriangle /> */}
            <video src={videoBg} autoPlay loop muted
            className={styles.video} />
            <div className={styles.welcome}>
                <h1>C h a r l i e</h1>
                <h1>P a g u i a</h1>
            </div>
        </div>
    );
};

export default Landing;
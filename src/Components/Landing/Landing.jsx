import videoBg from '../../../assets/LiquidAcid.mp4';
import styles from "./Landing.module.css";
import WebGLCanvas from "../WebGLCanvas/WebGLCanvas.jsx";
import ThreeJSCanvas from "../ThreeJSCanvas/ThreeJSCanvas.jsx";


const Landing = () => {
    return (
        // <div className={styles.landing}>
        //     <video src={videoBg} autoPlay loop muted />
        //         <div className={styles.content}>
        //         <h1>Welcome</h1>
        //         <p>To my site.</p>
        //     </div>
        // </div>
        <div className={styles.landing}>
            <ThreeJSCanvas />
        </div>
    );
};


export default Landing;
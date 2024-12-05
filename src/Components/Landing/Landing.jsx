import videoBg from '../../../assets/LiquidAcid.mp4';
import styles from "./Landing.module.css";
import WebGLCanvas from "../WebGLCanvas/WebGLCanvas.jsx";
import ThreeJSCanvas from "../ThreeJSCanvas/ThreeJSCanvas.jsx";
import ThreeJSTriangle from "../ThreeJSCanvas/ThreeJSTriangle.jsx";

const Landing = () => {
    return (
        <div className={styles.landing}>
            {/* <ThreeJSCanvas /> */}
            {/* <ThreeJSTriangle /> */}
            {/* <video src={videoBg} autoPlay loop muted
            className='absolute w-full h-full object-cover z-[-1]'/> */}
            {/* <div className='absolute w-full h-full flex flex-col justify-center items-center'>
                <div className=''>Welcome</div>
                <div className=''>to my site.</div>
            </div> */}
        </div>
            // position: absolute;
            // width: 100%;
            // height: 100%;
            // top: 0;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
            // color: white;
        // <div className={styles.landing}>
        //     <video className='flex' src={videoBg} autoPlay loop muted />
        //         <div className='flex justify-center align-center'>
        //             <div className={styles.content}>
        //             <h1>Welcome</h1>
        //             <p>To my site.</p>
        //         </div>
        //     </div>
        // </div>
        // <div className={styles.landing}>
        //     <ThreeJSCanvas />
        // </div>
    );
};

export default Landing;
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Experience from "./Pages/Experience/Experience.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import styles from "./App.module.css";
import Landing from "./Components/Landing/Landing.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";


function App() {
    return (<div className={styles.App}>
    {/* <Navbar />
    <Hero />
    <AboutMe /> */}
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/experience" element={ <Experience /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </Router>
    </div>
    );
}
  
export default App;
  
  













//     // <h1 className="text-3xl font-bold underline">
//     //   Hello World!
//     // </h1>


// function App() {
  // const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

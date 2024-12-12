import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Art from "./Pages/Art/Art.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import styles from "./App.module.css";
import Landing from "./Components/Landing/Landing.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";


function App() {
    return (
    <div className={styles.App}>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/art" element={ <Art /> } />
      </Routes>
    </Router>
    </div>
    );
}
  
export default App;
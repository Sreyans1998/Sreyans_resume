import React from 'react';
import About from "./About";
import NavBar from '../Utility/NavBar';
import Skills from './Skill';
import Education from './Education';
import Project from './Project';
import Footer from '../Utility/Footer';
import Heading from '../Utility/TextAnimate';

const Home = () => {
    return(
        <>
        <div className="bg" id="main">
            <NavBar />
            <Heading />
        </div>
        <Education />
        <About />
        <Skills />
        <Project />
        <Footer />
        </>
    )
}

export default Home;
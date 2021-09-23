import React from 'react'
import Typewriter from "typewriter-effect";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, Button } from '@mui/material';

const Heading = () => {
    return (
        <>
            <div className="position-relative text-white float-end tamplate text-center" style={{margin:"10%"}}>
                <h1 style={{fontSize:"3rem", marginTop:"3rem"}}>Welcome</h1>
                <hr />
                <h2 className="m-5">I am a 
                    <Typewriter onInit={(typewriter)=> {typewriter.typeString("FullStack Developer").pauseFor(1000)
                    .deleteAll().typeString("Programming Enthusiast").pauseFor(1000).deleteAll().typeString("UI/UX Designer")
                    .pauseFor(1000).deleteAll().typeString("Web Developer").start(); }}  />
                </h2>
                <ul className="d-flex list-unstyled justify-content-evenly" style={{margin:"20%"}}>
                    <li className="m-2">
                        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }} >
                            <FacebookIcon fontSize="large"/>
                        </Avatar>
                    </li>
                    <li className="m-2">
                        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }} >
                            <GitHubIcon fontSize="large"/>
                        </Avatar>
                    </li>
                    <li className="m-2">
                        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }} >
                            <LinkedInIcon fontSize="large"/>
                        </Avatar>
                    </li>
                    <li className="m-2">
                        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }} >
                            <InstagramIcon fontSize="large"/>
                        </Avatar>
                    </li>
                </ul>
                <Button variant="contained">Resume</Button>
            </div>
        </>
    )
}

export default Heading;
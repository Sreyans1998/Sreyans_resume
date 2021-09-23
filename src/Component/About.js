import React from 'react'
import Mypic from '../Images/My pic.jpg'

const About = () => {
    return(
        <>
            <div className="bg-dark my-5 my-shadow container position-relative" id="about">
                <div className="me-auto row d-inline-bolck">
                    <div className="col-12 mt-5 col-lg-4 col-xl-4 col-md-4 bg-dark">
                        <img src={Mypic} alt="Sreyans" width="80%"/>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-8 col-md-8 text-light mb-5 mx-auto">
                        <div className="fs-3 mt-5 mb-3">
                            <h1>About Me</h1>
                        </div>
                        <div className="fs-5">
                            I am a programming enthusiast and a full stack developer, I have been working on web frame-works like React, Angular, NestJS, Express/NodeJS for handling data over Relational (PostgreSQL, MySQL) and Non-Relational Database (MongoDB). With using tools like Postman, Git/GitHub, Swagger and NPM. I have made hands on projects on various full stack domains like MERN, PERN and etc. I am a Tech-savvy and a fast learner with innate communication skills and have an eye for details. A people’s person and possess the skills to present a service in a professional manner.
                        </div>
                        <div className="fs-3 mt-5 mb-3">
                            Contact Details
                        </div>
                        <div className="fs-5">
                            Email - <a className="text-white" href="mailto:sreyansranjan1998@gmail.com">sreyansranjan1998@gmail.com</a><br/>
                            Phone - <a className="text-white" href="tel:9708575622">9708575622</a>
                        </div>
                        <div className="fs-3 mt-5 mb-3">
                            My Resume
                        </div>
                        <div className="fs-5">
                            <button className="btn btn-primary">
                            Resume Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
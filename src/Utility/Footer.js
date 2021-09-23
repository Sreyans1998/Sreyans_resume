import React from 'react'
import LinkedIn from '../Images/linkedin.png'
import Facebook from '../Images/facebook.png'
import GitHub from '../Images/github.png'

const Footer = () => {
    return(
        <>
            <footer className="position-relative w-100 bg-secondary mt-5">
                <div className="w_90 mx-auto">
                    <div className="footer row f-sm d-flex text-white">
                        <div className="col-12 mt-5 col-lg-4 col-xl-4 position-relative" style={{height:"200px", }}>
                            <span><h2>Email - </h2><h5>sreyanranjan1998@gmail.com</h5></span><br />
                            <span><h2>Phone - </h2><h5>9708575622</h5></span>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 position-relative justify-content-center" style={{height:"200px"}}>
                                <p className="my-5 text-center">
                                    Plot No.-22, Vidya Pati Colony, Bhawanipur Site<br />
                                    Chandankyari road, Jodhadih more, Chas<br />
                                    Bokaro, JH, 827013.
                                </p>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 f-sm position-relative" style={{height:"200px"}}>
                            <ul className="float-end mt-5">
                                <li className="li-none">
                                    <a href="https://www.linkedin.com/in/sreyans-mishra-80b0b91a0"><img src={LinkedIn} style={{width:"50px"}} alt="LinkedIn" /></a>
                                </li>
                                <li className="li-none">
                                    <a href="https://www.facebook.com/sreyans.ranjan.5"><img src={Facebook} style={{width:"50px"}} alt="Facebook" /></a>
                                </li>
                                <li className="li-none">
                                    <a href="https://github.com/Sreyans1998"><img src={GitHub} style={{width:"50px"}} alt="GitHub" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
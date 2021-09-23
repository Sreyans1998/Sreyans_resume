import React from 'react'
import { Link } from '@mui/material';

const NavBar = () => {
    return(
        <>
            <div className="navbar position-static navbar-expand-lg navbar-light text-white">
            <h1 className="ms-5">Sreyans Ranjan</h1>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse fs-3 navbar-collapse text-center bg-trans" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto justify-content-evenly mb-2 mb-lg-0">
                  <li className="nav-item mx-4">
                    <Link>
                      <a className="nav-link text-white active" aria-current="page" href="#main">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link underline="hover">
                      <a className="nav-link text-white" href="#about">About Me</a>
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link  underline="hover">
                      <a className="nav-link text-white" href="#education">Education</a>
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link underline="hover">
                      <a className="nav-link text-white" href="#skills">Skills</a>                    
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link underline="hover">
                      <a className="nav-link text-white" href="#experience">Experience</a>
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link underline="hover">
                      <a className="nav-link text-white" href="#project">Projects</a>
                    </Link>
                  </li>
                </ul>
              </div>
        </div>
        </>
    )
}

export default NavBar;
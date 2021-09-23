import React from 'react'
import projectData from '../Utility/projectData'
import CardProperty from '../Utility/Card'

const Project = () => {
    return(
        <>
            <div className="bg-dark position-relative" id="project">
                <h1 className="text-white text-center my-5">Projects</h1>
                <div className="row container mx-auto gy-5">
                {
                    projectData.map((val, ind) =>{
                    return <CardProperty key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                    github={val.github} />
                    })
                }
                </div>
            </div>  
        </>
    )
}

export default Project;
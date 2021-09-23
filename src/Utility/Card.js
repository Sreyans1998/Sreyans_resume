import { GitHub } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const CardProperty = (props) =>{
    return (
        <>  
            <div className="col-12 col-lg-6 col-xl-6">
                <div class="card w-75 mx-auto m-5 my-shadow">
                    <div style={{height:"40%"}} class="card-img-top text-center">
                        <img src={props.imgsrc} style={{height:"100%", width:"100%"}} alt="..." />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <a href={props.github}>
                            <Button variant="contained">
                                <GitHub sx={{ mr: 3 }} color="light"/>
                                Repository
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProperty;
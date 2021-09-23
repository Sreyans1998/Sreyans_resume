import React from 'react'

const Education = () => {
    return(
        <>
            <div className="position-relative bg-light my-h" id="education">
                <h1 className="text-center">Education</h1>
                    <div class="col-12 col-md-7 col-lg-7 mt-5 col-xl-7 mx-auto">
                        <table className="table shadow-lg table-primary fs-4">
                            <thead>
                                <tr className="test">
                                <th>Degree</th>
                                <th>Year Of Completion</th>
                                <th>Univerity/Board</th>
                                <th>Percentage/CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="test">
                                <td>10th</td>
                                <td>2015</td>
                                <td>CBSE</td>
                                <td>8.4CGPA</td>
                                </tr>
                                <tr className="test">
                                <td>12th</td>
                                <td>2017</td>
                                <td>CBSE</td>
                                <td>60.6%</td>
                                </tr>
                                <tr className="test">
                                <td>B.Tech</td>
                                <td>2021</td>
                                <td>Rajiv Gandhi Proudyogiki Vishwavidyalaya</td>
                                <td>7.85CGPA</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </>
    )
}

export default Education;
import React, { useRef, useState } from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import ReactToPrint from 'react-to-print';


import "../App.css"





const Templates = () => {
    const componentRef = useRef();
    const [resumeData] = useState([JSON.parse(localStorage.getItem('allData'))])
    return (
        <div>




            <ReactToPrint
                trigger={() => <button variant="warning">Print this out!</button>}
                content={() => componentRef.current}
            />





            <div id="inner-nav">

                <div ref={componentRef} id="container">
                {
                            resumeData.map(val=>(
                                <>
                                
                    <div id="profile">
                        <div id="image">

                            <a href="#"><i class="fas fa-pen stroke-transparent"></i></a>
                        </div>
                       
                        <p id="name">{val.name}<br />{val.lastname}<br /><span id="email">{val.email}</span></p>
                        <hr width="100%" />

                        <h5>Profile</h5>
                        <p id="designation">{val.profile}<br /><span id="college"></span></p>
                        <h5>Phone</h5>
                        <p id="designation">{val.phone}<br /><span id="college"></span></p>

                        <div id="social-links"><a href="#"></a><a><i class="fab fa-linkedin-in stroke-transparent"></i></a><a href="#"><br /><a href="#">{val.github}</a></a>
                        <br></br>
                        <a><i class="fab fa-github stroke-transparent"></i></a>{val.linkdin}</div>

                        <a id="edit-intro" href="#"><i class="fas fa-pen-alt blue"></i>&nbsp;&nbsp;</a>
                        <h5>Address</h5>
                        <p id="designation">{val.address}<br /><span id="college"></span></p>
                        <p id="designation">{val.city}<br /><span id="college"></span></p>
                        <p id="designation">{val.state}<br /><span id="college"></span></p>
                        
                        <hr width="100%" />





                        {/* about */}
                        <div id="about">
                            <p style={{ display: 'inline' }} >Skills</p>
                            <a href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a>
                        </div>
                        <p id="year-graduation">{val.skill1}</p>
                        <p id="year-graduation">{val.skill2}</p>
                        <p id="year-graduation">{val.skill3}</p>
                        <p id="year-graduation">{val.skill4}</p>
                        <p id="year-graduation">{val.skill5}</p>
                        <p id="year-graduation">{val.skill6}</p>

                        <hr width="100%" />
                        <div id="about">
                            <p style={{ display: 'inline' }} >Hobbies</p>
                            <a href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a>
                        </div>
                        <p id="year-graduation">{val.hobbie1}</p>
                        <p id="year-graduation">{val.hobbie2}</p>
                        <p id="year-graduation">{val.hobbie3}</p>
                        <p id="year-graduation">{val.hobbie4}</p>
                        <p id="year-graduation">{val.hobbie5}</p>
                    </div>
                    <div id="info-cards">

                        <div class="card">
                            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Work Experience</p>
                            <ul>
                                <li><p class="tags">Company Name<br /><span>{val.work1}|<span>{val.start1} --{val.end1}</span></span></p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                    <li><p class="tags">Company Name<br /><span>{val.work2}|<span>{val.start2} --{val.end2}</span></span></p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                
                            </ul>
                            {/* <a href="#">+ Add workshops attended</a> */}
                        </div>
                        <div class="card">
                            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Education</p>
                            <ul>
                                <li><p class="tags">Primary Education<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{val.primary} </span>
                                    <span style={{ display: "flex" }}><h6> Board: </h6>{val.boardp} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage: </h6>{val.percentagep} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                <li><p class="tags">Secondary Education<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{val.secondary} </span>
                                    <span style={{ display: "flex" }}><h6> Board: </h6>{val.boards} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage: </h6>{val.percentagep} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                <li><p class="tags">Graduation<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{val.graduation} </span>
                                    <span style={{ display: "flex" }}><h6> University Name: </h6>{val.univercity} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage In Graduation: </h6>{val.graduationp} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                <li><p class="tags">Post Graduation<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{val.postgraduation} </span>
                                    <span style={{ display: "flex" }}><h6> University Name: </h6>{val.postu} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage In Graduation: </h6>{val.postgraduationp} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                            </ul>
                            {/* <a href="#">+ Add workshops attended</a> */}
                        </div>
                        <div class="card">
                            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Achievements</p>
                            {/* <a href="#">+ Add work experience, including contracts and internships</a> */}
                            <span>{val.awards}</span>
                            
                        </div>
                    </div>
                                </>
                            ))
                        }

                </div>
            </div>
        </div>


    )
}

export default Templates

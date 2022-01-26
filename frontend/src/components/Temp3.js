import React, { useRef, useState } from 'react'
import './temp3.css'
import ReactToPrint from 'react-to-print';

const Temp3 = (props) => {

    const componentRef = useRef();
    const [resumeData] = useState([JSON.parse(localStorage.getItem('allData'))])
    return (
        <div>
            <div ref={componentRef}>
                <ReactToPrint
                    trigger={() => <button variant="warning">Print this out!</button>}
                    content={() => componentRef.current}
                />

                {
                    resumeData.map(val => (
                        <body id="top">
                            <div id="cv" className="instaFade">
                                <div className="mainDetails">

                                    <div id="name">
                                        <h2 className="quickFade delayTwo">{val.name}</h2>
                                        <br />
                                        <h2 className="quickFade delayTwo">{val.lastname}</h2>
                                        <br />
                                        <ul>
                                            <li>address: <a href="mailto:joe@bloggs.com" target="_blank">{val.address}/{val.city}/{val.state}</a></li>

                                        </ul>
                                        <br />
                                        <br />

                                    </div>

                                    <div id="contactDetails" className="quickFade delayFour">
                                        <ul>
                                            <li>e: <a href="mailto:joe@bloggs.com" target="_blank">{val.email}</a></li>
                                            <li>linkdin :<a href="http://www.bloggs.com">{val.linkdin}</a></li>
                                            <li>github:<a href="http://www.bloggs.com">{val.github}</a></li>
                                            <li>m: {val.phone}</li>
                                        </ul>
                                    </div>
                                    <div className="clear"></div>
                                </div>

                                <div id="mainArea" className="quickFade delayFive">
                                    <section>
                                        <article>
                                            <div className="sectionTitle">
                                                <h1>Personal Profile</h1>
                                            </div>

                                            <div className="sectionContent">
                                                <p>{val.profile}</p>
                                            </div>
                                        </article>
                                        <div className="clear"></div>
                                    </section>


                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Work Experience</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <article>
                                                <h2>{val.work1}</h2>
                                                <p className="subDetails">{val.start1}</p>
                                                <p className="subDetails">{val.end1}</p>
                                            </article>

                                            <article>
                                                <h2>{val.work2}</h2>
                                                <p className="subDetails">{val.start2}</p>
                                                <p className="subDetails">{val.end2}</p>
                                            </article>


                                        </div>
                                        <div className="clear"></div>
                                    </section>


                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Key Skills</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <ul className="keySkills">
                                                <li>{val.skill1}</li>
                                                <li>{val.skill2}</li>
                                                <li>{val.skill3}</li>
                                                <li>{val.skill4}</li>
                                                <li>{val.skill5}</li>
                                                <li>{val.skill6}</li>

                                            </ul>
                                        </div>
                                        <div className="clear"></div>
                                    </section>


                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Education</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <article>
                                                <h2>primary:{val.primary}</h2>
                                                <p className="subDetails">boards:{val.boardp}</p>
                                                <p>{val.percentagep}</p>
                                            </article>

                                            <article>
                                                <h2>Secondary:{val.secondary}</h2>
                                                <p className="subDetails">boards:{val.boards}</p>
                                                <p>{val.percentages}</p>
                                            </article>
                                            <article>
                                                <h2>Graduation:{val.graduation}</h2>
                                                <p className="subDetails">univercvity:{val.univercity}</p>
                                                <p>{val.graduationp}</p>
                                            </article>
                                            <article>
                                                <h2> Post Graduation:{val.postgraduation}</h2>
                                                <p className="subDetails">univercvity:{val.postunivercity}</p>
                                                <p>{val.postgraduationp}</p>
                                            </article>
                                        </div>
                                        <div className="clear"></div>
                                    </section>
                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Achievements</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <ul className="keySkills">
                                                <li>{val.awards}</li>


                                            </ul>
                                        </div>
                                        <div className="clear"></div>
                                    </section>
                                    <section>
                                        <div className="sectionTitle">
                                            <h1>Hobbies</h1>
                                        </div>

                                        <div className="sectionContent">
                                            <ul className="keySkills">
                                                <li>{val.hobbie1}</li>
                                                <li>{val.hobbie2}</li>
                                                <li>{val.hobbie3}</li>
                                                <li>{val.hobbie4}</li>
                                                <li>{val.hobbie5}</li>


                                            </ul>
                                        </div>
                                        <div className="clear"></div>
                                    </section>

                                </div>
                            </div>

                        </body>
                      
                    ))
                }
            </div>
        </div>
    )
}
export default Temp3;

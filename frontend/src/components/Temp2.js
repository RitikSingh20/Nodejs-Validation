import React, { useRef, useState } from 'react'
import './temp2.css'
import ReactToPrint from 'react-to-print';

const Temp2 = (props) => {

    const componentRef = useRef();
    const [resumeData] = useState([JSON.parse(localStorage.getItem('allData'))])


    return (
        <>
            <div >
                <ReactToPrint
                    trigger={() => <button variant="warning">Print this out!</button>}
                    content={() => componentRef.current}
                />
                <div ref={componentRef} className="container1" style={{ border: "2px solid #79A9CE" }}>
                    {
                        resumeData.map(val => (
                            <>

                                <div className="header1" style={{ backgroundColor: "#e0ffff" }}>
                                    <div className="full-name">
                                        <span className="first-name">{val.name}</span>
                                        <span className="last-name">{val.lastname}</span>
                                    </div>
                                    <div className="contact-info">
                                        <span className="email">Email: </span>
                                        <span className="email-val">{val.email}</span>
                                        <br />
                                        <span className="email">Address: </span>
                                        <span className="email-val">{val.address}{val.city}{val.state}</span>
                                        <br />
                                        <span className="email">Github: </span>
                                        <span className="email-val">{val.github}</span>
                                        <br />
                                        <span className="email">Linkdin: </span>
                                        <span className="email-val">{val.linkdin}</span>
                                        <span className="separator"></span>
                                        <span className="phone">Phone: </span>
                                        <span className="phone-val">{val.phone}</span>
                                    </div>
                                    <hr className='hr1' />

                                </div>

                                <div className="about">
                                    <span className="position">{val.profile} </span>


                                </div>
                                <br />
                                <div className="details">
                                    <div className="section">
                                        <div className="section__title">Experience</div>
                                        <div className="section__list">
                                            <div className="section__list-item">
                                                <div className="left">
                                                    <div className="name">{val.work1}</div>
                                                    <div className="addr">{val.start1}</div>
                                                    <div className="duration">{val.end1}</div>
                                                </div>
                                                <div className="right">
                                                    <div className="name">{val.work2}</div>
                                                    <div className="desc">{val.start2}</div>
                                                    <div className="duration">{val.end2}</div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="section">
                                        <div className="section__title">Education</div>
                                        <div className="section__list">
                                            <div className="section__list-item">
                                                <div className="left">
                                                    <div className="name">Primary</div>
                                                    <div className="addr">{val.primary}</div>
                                                    <div className="addr">{val.boardp}</div>
                                                    <div className="duration">{val.percentagep}</div>
                                                </div>
                                                <div className="right">
                                                    <div className="name">Secondary</div>
                                                    <div className="addr">{val.secondary}</div>
                                                    <div className="addr">{val.boards}</div>
                                                    <div className="duration">{val.percentages}</div>
                                                </div>
                                            </div>
                                            <div className="section__list">
                                                <div className="section__list-item">
                                                    <div className="left">
                                                        <div className="name">Graduation</div>
                                                        <div className="addr">{val.graduation}</div>
                                                        <div className="addr">{val. univercity}</div>
                                                        <div className="duration">{val.graduationp}</div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="name">Post Graduation</div>
                                                        <div className="addr">{val.postgraduation}</div>
                                                        <div className="addr">{val.postunivercity}</div>
                                                        <div className="duration">{val. postgraduationp}</div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <br />
                                        {/* <div className="section">
                                <div className="section__title">Projects</div>
                                <div className="section__list">
                                    <div className="section__list-item">
                                        <div className="name">DSP</div>
                                        <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
                                    </div>

                                    <div className="section__list-item">
                                        <div className="name">DSP</div>
                                        <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                        <div className="section">
                                            <div className="section__title">Skills</div>
                                            <div className="skills">
                                                <div className="skills__item">
                                                    <div className="left"><div className="name">
                                                        {val.skill1}
                                                    </div></div>
                                                    <div className="right">
                                                        <input id="ck1" type="checkbox" />

                                                        <label for="ck1"></label>
                                                        <input id="ck2" type="checkbox" />

                                                        <label for="ck2"></label>
                                                        <input id="ck3" type="checkbox" />

                                                        <label for="ck3"></label>
                                                        <input id="ck4" type="checkbox" />
                                                        <label for="ck4"></label>
                                                        <input id="ck5" type="checkbox" />
                                                        <label for="ck5"></label>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="skills">
                                                <div className="skills__item">
                                                    <div className="left"><div className="name">
                                                        {val.skill2}</div></div>
                                                    <div className="right">
                                                        <input id="ck1" type="checkbox" />

                                                        <label for="ck1"></label>
                                                        <input id="ck2" type="checkbox" />

                                                        <label for="ck2"></label>
                                                        <input id="ck3" type="checkbox" />

                                                        <label for="ck3"></label>
                                                        <input id="ck4" type="checkbox" />
                                                        <label for="ck4"></label>
                                                        <input id="ck5" type="checkbox" />
                                                        <label for="ck5"></label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skills__item">
                                                <div className="left"><div className="name">
                                                    {val.skill3}</div></div>
                                                <div className="right">
                                                    <input id="ck1" type="checkbox" />

                                                    <label for="ck1"></label>
                                                    <input id="ck2" type="checkbox" />

                                                    <label for="ck2"></label>
                                                    <input id="ck3" type="checkbox" />

                                                    <label for="ck3"></label>
                                                    <input id="ck4" type="checkbox" />
                                                    <label for="ck4"></label>
                                                    <input id="ck5" type="checkbox" />
                                                    <label for="ck5"></label>

                                                </div>
                                            </div>
                                            <div className="skills__item">
                                                <div className="left"><div className="name">
                                                    {val.skill4}</div></div>
                                                <div className="right">
                                                    <input id="ck1" type="checkbox" />

                                                    <label for="ck1"></label>
                                                    <input id="ck2" type="checkbox" />

                                                    <label for="ck2"></label>
                                                    <input id="ck3" type="checkbox" />

                                                    <label for="ck3"></label>
                                                    <input id="ck4" type="checkbox" />
                                                    <label for="ck4"></label>
                                                    <input id="ck5" type="checkbox" />
                                                    <label for="ck5"></label>

                                                </div>
                                            </div>
                                            <div className="skills__item">
                                                <div className="left"><div className="name">
                                                    {val.skill5}</div></div>
                                                <div className="right">
                                                    <input id="ck1" type="checkbox" />

                                                    <label for="ck1"></label>
                                                    <input id="ck2" type="checkbox" />

                                                    <label for="ck2"></label>
                                                    <input id="ck3" type="checkbox" />

                                                    <label for="ck3"></label>
                                                    <input id="ck4" type="checkbox" />
                                                    <label for="ck4"></label>
                                                    <input id="ck5" type="checkbox" />
                                                    <label for="ck5"></label>

                                                </div>
                                            </div>
                                            <div className="skills__item">
                                                <div className="left"><div className="name">
                                                    {val.skill6}</div></div>
                                                <div className="right">
                                                    <input id="ck1" type="checkbox" />

                                                    <label for="ck1"></label>
                                                    <input id="ck2" type="checkbox" />

                                                    <label for="ck2"></label>
                                                    <input id="ck3" type="checkbox" />

                                                    <label for="ck3"></label>
                                                    <input id="ck4" type="checkbox" />
                                                    <label for="ck4"></label>
                                                    <input id="ck5" type="checkbox" />
                                                    <label for="ck5"></label>

                                                </div>
                                            </div>


                                        </div>
                                        <div className="section">
                                            <div className="section__title">
                                                Achievements
                                            </div>
                                            <div className="section__list">
                                                <div className="section__list-item">
                                                    {val.awards}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="section">
                                            <div className="section__title">
                                                Interests
                                            </div>
                                            <div className="section__list">
                                                <div className="section__list-item">
                                                    {val.hobbie1} {val.hobbie2} {val.hobbie3} {val.hobbie4} {val.hobbie5}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default Temp2;

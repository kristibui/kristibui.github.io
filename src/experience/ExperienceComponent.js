import React, { useState } from 'react';
import "./experience.css"

const ExperienceComponent = () => {

    // accordions
    const [c1Accordion, setC1Accordion] = useState(false)
    const [sHAccordion, setSHAccordion] = useState(false)
    const [schonfeldAccordion, setSchonfeldAccordion] = useState(false)
    const [stateStreetAccordion, setStateStreetAccordion] = useState(false)
    const [dsAccordion, setDsAccordion] = useState(false)
    const [dbAccordion, setDbAccordion] = useState(false)
    const [fellowAccordion, setFellowAccordion] = useState(false)
    const [nusciAccordion, setNusciAccordion] = useState(false)
    const [neuAccordion, setNeuAccordion] = useState(false)

    return(
        <div className='content'>
            <h1 className='headline'>experience</h1>

            <h2 className='sub-headline'>employment</h2>
            <hr className='divider'/>

            <div className='role'>
                <span><b>Capital One</b> - McLean, VA</span>
                <span className='exp-year'>June 2020 - August 2020</span>
                <br/>
                <span onClick={() => c1Accordion ? 
                                    setC1Accordion(false) : 
                                    setC1Accordion(true)} 
                    className='title'>Software Engineering Intern</span>
                
                {c1Accordion &&
                <div className='description'>
                    Current Software Engineering Intern on the Network Automation Team. This is a remote 
                    internship due to the COVID-19 2020 pandemic.
                </div>
                }

            </div>

            <div className='role'>
                <span><b>Schonfeld Strategic Advisors</b> - New York, NY</span>
                <span className='exp-year'>January 2019 - June 2019</span>
                <br/>
                <span onClick={() => schonfeldAccordion ? 
                                    setSchonfeldAccordion(false) : 
                                    setSchonfeldAccordion(true)} 
                    className='title'>Programmer/Data Analyst Co-op</span>
                
                {schonfeldAccordion &&
                <div className='description'>
                    As part of the Business Analytics Team at Schonfeld, I got to work on many interesting analytical 
                    projects relating to the business metrics of the firm, which entailed programming in Python, 
                    Q/kdb+, and SQL. One of the best things about this role was that I learned how hedge funds function 
                    and developed a sense of how the firm was doing financially just through 
                    the team's projects and processes. Some of the most meaningful projects that I worked 
                    on included automating much of the overhead in fixing monthly accounting, and rewriting the 
                    programs to calculate netting benefit from banks.
                </div>
                }

            </div>

            <div className='role'>
                <span><b>State Street Global Advisors</b> - Boston, MA</span>
                <span className='exp-year'>January 2018 - June 2018</span>
                <br/>
                <span onClick={() => stateStreetAccordion ?
                                    setStateStreetAccordion(false) :
                                    setStateStreetAccordion(true)}
                    className='title'>Performance Engineering Co-op</span>

                {stateStreetAccordion && 
                <div className='description'>
                    At State Street, I got to work on the Performance Engineering Team. This was an exciting role 
                    for me as it was my first technical job, and it taught me a lot about the SDLC, 
                    agile development and how different technology teams work together. I did a variety of 
                    roles here, including project management for testing the front-facing SPDRs site, 
                    writing data analysis automation programs in Java, and performance engineering 
                    testing with JMeter and Dynatrace.
                </div>
                }
            </div>

            <div className='role'>
                <span><b>Khoury College of Computer Sciences</b> - Boston, MA</span>
                <span className='exp-year'>January 2020 - April 2020</span>
                <br/>
                <span onClick={() => dsAccordion ?
                                    setDsAccordion(false) :
                                    setDsAccordion(true)}
                    className='title'>Teaching Assistant (DS2000 Programming with Data)</span>
                
                {dsAccordion && 
                <div className='description'>
                    I was a teaching assistant for the Spring 2020 DS2000 Programming with Data course. 
                    This course is meant to introduce data science and programming concepts to students 
                    at Northeastern outside of Khoury, who may want to apply data programming to their 
                    particular field of study. My tasks included holding office hours, assisting with 
                    practicums, and grading homework, quizzes and exams. I really enjoyed this role for 
                    two reasons - 1, I love being able to show how interdisciplinary computer science 
                    can be, and 2. I find teaching very rewarding, especially to those who do not have 
                    prior programming knowledge. The moment when they have an 'a-ha!' is the best.
                </div>
                }

            </div>

            <div className='role'>
                <span><b>Khoury College of Computer Sciences</b> - Boston, MA</span>
                <span className='exp-year'>September 2019 - December 2019</span>
                <br/>
                <span onClick={() => dbAccordion ?
                                    setDbAccordion(false) :
                                    setDbAccordion(true)}
                    className='title'>Teaching Assistant (CS3200 Database Design)</span>

                {dbAccordion && 
                <div className='description'>
                    I was a teaching assistant for the Fall 2019 CS3200 Database Design course. 
                    This course introduces relational database design to students, specifically 
                    using MySQL/SQL. My tasks included holding office hours and grading homework. 
                    Database design is one of my main interests in computer science; therefore, 
                    being able to assist with this course was really rewarding. My favorite memory 
                    of teaching this class was having the professor telling me that many of her 
                    students had specifically pointed out to her how much they appreciated my assistance 
                    in office hours.
                </div>
                }
            </div>


            <h2 className='sub-headline'>leadership</h2>
            <hr className='divider'/>

            <div className='role'>
                <span><b>Khoury College of Computer Sciences</b> - Boston, MA</span>
                <span className='exp-year'>September 2018 - April 2020</span>
                <br/>
                <span onClick={() => fellowAccordion ? 
                                    setFellowAccordion(false) :
                                    setFellowAccordion(true)}
                    className='title'>Khoury Fellow (CS1200 Leadership and Skill Development)</span>

                {fellowAccordion && 
                <div className='description'>
                    I have been a Khoury Fellow during the Fall 2018, Fall 2019, and Spring 2020 semesters. 
                    This is a teaching assistant and mentor position for the CS1200 Leadership and Skill 
                    Development class, which is a required class for all first year students in Khoury to 
                    help them with their transition into the college. Being a Fellow has been extremely 
                    rewarding, as I have been able to provide my advice and assistance in helping students 
                    who may be struggling as a lot of the student experiences during the first semester of 
                    college at Khoury tends to be similar. This role has also taught me to be a better 
                    listener and to be more inclusive to students with different backgrounds than my own.
                </div>
                }
            </div>

            <div className='role'>
                <span><b>Northeastern University Science Magazine (NUSCI)</b> - Boston, MA</span>
                <span className='exp-year'>September 2019 - Present</span>
                <br/>
                <span onClick={() => nusciAccordion ?
                                    setNusciAccordion(false) :
                                    setNusciAccordion(true)}
                    className='title'>President</span>

                {nusciAccordion && 
                <div className='description'>
                    I have been the President of the <a href='https://nuscimag.com/'>Northeastern Science Magazine</a> since Fall 2019. 
                    Before this role, I was a Head Designer for the magazine and have been a designer 
                    all of my college career. This role includes managing all of the different teams 
                    (Marketing, Photography, Design, Writing, Outreach, Web), developing the printing 
                    schedule for the magazine, designing content with InDesign, and communicating 
                    with our publisher. I have done print journalism since high school and enjoy print 
                    layout design as a hobby, so this role has been a great way for me to continue that 
                    in college. Being President has also helped me work on my communication and leading 
                    skills and has made me more confident.
                </div>
                    }
            </div>

            <h2 className='sub-headline'>education</h2>

            <hr className='divider'/>

            <div className='role'>
                <span><b>Northeastern University</b> - Boston, MA</span>
                <span className='exp-year'>September 2016 - May 2021</span>
                <br/>
                <span onClick={() => neuAccordion ?
                                    setNeuAccordion(false) :
                                    setNeuAccordion(true)}
                    className='title'>Bachelor of Science in Computer Science</span>

                {neuAccordion && 
                <div className='description'>
                    I am a current fifth year at Northeastern University, studying Computer Science 
                    at the Khoury College of Computer Sciences. My time here has been such a 
                    huge period of growth for me, not only in learning strong computer science skills after coming 
                    in with no programming experience, but also in learning how to be a better student, 
                    be more confident, manage my time better, and communicate better. I am grateful 
                    for all of the experiences, good and bad, that I have had at Northeastern and at 
                    Boston, as it has shaped me to be a better person today.
                </div>
                }

                <br/>
                <div className='college-info'>
                    <span className='college-subinfo'><b>GPA:</b> 3.5</span><br/>
                    <span className='college-subinfo'><b>Honors:</b> Dean's List</span><br/>
                    <span className='college-subinfo'><b>Coursework:</b> Web Development, Software Development, 
                    Large-Scale Information Storage and Retrieval, Data Collection, Integration, and Analysis, 
                    Database Design, Computer Systems, Algorithms & Data Structures, Discrete Structures, 
                    Logic and Computation, Calculus, Probability and Statistics, Linear Algebra, Object-Oriented Design, 
                    Programming Languages, Embedded Design: Enabling Robotics
                    </span>
                </div>
            </div>

            <h2 className='sub-headline'>skills</h2>

            <hr className='divider'/>

            <div className='role-skills'>
                <span><b>Languages: </b>Python, Javascript, Java, SQL, Q/kdb+</span>
            </div>

            <div className='role-skills'>
                <span><b>Technologies: </b>MySQL, MongoDB, React, Neo4J, Spring, Angular</span>
            </div>

            <div className='role-skills'>
                <span><b>Other: </b>Git/GitHub, Adobe Creative Cloud Suite (InDesign, Illustrator, Photoshop)</span>
            </div>

        </div>
    )
}

export default ExperienceComponent;
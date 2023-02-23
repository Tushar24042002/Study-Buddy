import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
function SecondarySamplePaperSubject(props) {
    return (
        <div>
            <Helmet>


                <link rel="icon" type="image/ico" href="assets/images/favicon.ico" />
                <meta name="google-site-verification" content="6bVqd2PDS4-volB7T2OiGPkTY-oE8z68EPmYLquGkBE" />



                <meta name="author" content="Tushar Gupta - BCA Student" />



                <meta name="CountryCode" content="IN" />
                <meta name="Country" content="India" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="robot" content="ALL" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="yahoobot" content="index, follow" />
                <meta http-equiv="Content-Language" content="en-us" />
                <meta name="expires" content="never" />
                <meta name="language" content="English" />
                <meta name="geo.placename" content="New Delhi, India" />
                <meta property="og:type" content="Website" />

                <meta property="og:image"
                    content="https://www.studybuddy./assets/images/studybuddylogo.png" />
                <meta property="og:site_name" content="Study Buddy" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:card" content="summary_large_image" />


                <title>{"Best Learning Platform Study Buddy - " + props.heading}</title>
                <link rel="canonical" href={"https://www.studybuddy.store/" + props.heading} />
                <meta name="description" content="CBSE Sample Paper 2022-23: Here you can get Latest CBSE Sample Papers with Solutions in PDF Format Along with Subject wise such as Maths, Chemistry, Biology, Physics, English &  Hindi. You can download model papers class wise from 7, 8, 9, 10, 11 &  12." />

                {/* <title>Best Learning Platform Study Buddy - Science Subject Page</title> */}
                <meta name="title" content="CBSE Informative - Science Subject Page" />
                <meta name="keywords" content="CBSE Sample Paper, CBSE Sample Paper 2022-23, CBSE Model Papers, CBSE Sample Papers with Answers, Class Wise CBSE Sample Paper, Subject Wise Sample Papers for CBSE, Year Wise CBSE Sample Papers, CBSE Sample Question Papers, Marking Scheme of CBSE Sample Question, How to Download CBSE Sample Papers, Solve CBSE Sample Papers" />
                <meta property="og:title" content="Best Learning Platform Study Buddy - Science Subject Page" />

                <meta property="og:description"
                    content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

                <meta name="twitter:title" content="Best Learning Platform Study Buddy - Science Subject Page" />
                <meta name="twitter:description"
                    content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
                <meta property="og:url" content={"https://www.studybuddy.store/" + props.heading} />



            </Helmet>
            <section className='parts'>
                <CourseHeading heading={props.heading} subheading="Class 7th to 12th Sample Paper" />
                <div className="container py-5">
                    <div className="title mb-3">{props.heading}</div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.subject1}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.sub1}</h3>
                                                <p>{props.line}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.subject2}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.sub2}</h3>
                                                <p>{props.line}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.subject3}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.sub3}</h3>
                                                <p>{props.line}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.subject4}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.sub4}</h3>
                                                <p>{props.line}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.subject5}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.sub5}</h3>
                                                <p>{props.line}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.subject6}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.sub6}</h3>
                                                <p>{props.line}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
            <GoToTop />
        </div>
    )
}
export default SecondarySamplePaperSubject;
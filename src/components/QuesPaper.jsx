import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
function QuesPaper(props) {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://www.studybuddy.store/notes" />
                <meta property="og:title" content="Notes page Class - 7 8  9 10 11 12 science chemistry physics biology chapter " />
                <meta property="og:description" content="NCERT CBSE Notes For Class 6 to 12 Maths Science English, Hindi, sst, Physics, Chemistry all Subject Chapter wise for study and free download in pdf" />
                <meta name="keywords" content="Class 10 science notes, class 9 science notes, class 11 chemistry notes, class 12 physics notes, class 12 chemistry notes, class 10 life process notes, class 11th physics notes, control and coordination class 10 notes, class 8 science notes, physical education class 12 notes, class 11 biology notes, cbse class 7 science notes, ncert class 10 science notes, p block elements class 12 notes, class 10 history chapter 1 notes, class 12 english notes, class 10 science notes chapter 1, class 10 biology notes, class 10 sst notes, haloalkanes and haloarenes class 12 notes, class 11 chemistry chapter 1 notes, chemistry in everyday life class 12" />
                <meta name="description" content="NCERT CBSE Notes For Class 1 to 12 Maths Science English, Hindi, sst, Physics, Chemistry all Subject Chapter wise for study and free download in pdf" />



                <title>Study Buddy | {props.title}</title>

                <meta name="title" content="Notes page Class - 7 8  9 10 11 12 science chemistry physics biology chapter" />
                <meta property="og:title" content="Notes page Class - 7 8  9 10 11 12 science chemistry physics biology chapter" />

                <meta property="og:description"
                    content="NCERT CBSE Notes For Class 1 to 12 Maths Science English, Hindi, sst, Physics, Chemistry all Subject Chapter wise for study and free download in pdf" />

                <meta name="twitter:title" content="Notes page Class - 7 8  9 10 11 12 science chemistry physics biology chapter" />
                <meta name="twitter:description"
                    content="NCERT CBSE Notes For Class 1 to 12 Maths Science English, Hindi, sst, Physics, Chemistry all Subject Chapter wise for study and free download in pdf" />
                <meta property="og:url" content="https://www.studybuddy.store/notes" />
            </Helmet>
            <section className='parts'>
                <CourseHeading heading="Sample Paper" subheading="Class 7th to 12th" />
                <div className="container py-5">
                    <div className="title mb-3">{props.heading}</div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to="/courses-7">
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>Class 7th</h3>
                                                <p>2020-2022</p>
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
                            <Link to="/courses-8">
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>Class 8th</h3>
                                                <p>2020-2022</p>
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
                            <Link to="/courses-9">
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>Class 9th</h3>
                                                <p>2020-2022</p>
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
                            <Link to="/courses-10">
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>Class 10th</h3>
                                                <p>2020-2022</p>
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
                            <Link to="/courses-11">
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>Class 11th</h3>
                                                <p>2020-2022</p>
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
                            <Link to="/courses-12">
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>Class 12th</h3>
                                                <p>2020-2022</p>
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
export default QuesPaper;
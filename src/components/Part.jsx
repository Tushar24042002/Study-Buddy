import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Part(props) {
  return (
    <div>
    <Helmet>
    <link    rel="canonical" href="https://www.studybuddy.store" />
  </Helmet>
    <section className='parts' id="parts">
      
        <div className="container py-5">
        <div className="title mb-3">Academic Course</div>
            <div className="row">


            <div className="col-lg-4 col-md-6 col-12 p-4">
                <Link to="/py-ques"> 
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>Previous Year Question Paper</h3>
                                    <p>Class 10th & 12th</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="assets/images/academic/notes.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </Link>
                </div>




                
                <div className="col-lg-4 col-md-6 col-12 p-4">
                <Link to="/syllabus"> 
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>Syllabus</h3>
                                    <p>2022-2023</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="assets/images/academic/syllabus.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-4">
                <Link to="/notes"> 
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>Notes</h3>
                                    <p>Latest Course</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="assets/images/academic/notes.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-4">
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>Deleted Syllabus</h3>
                                    <p>Deleted Syllabus</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="assets/images/academic/syllabus.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-4">
                <Link to="/ncert-solutions"> 
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>NCERT Solution</h3>
                                    <p>Class 10th - 12th</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="assets/images/academic/notes.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link> 
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-4">
                    <Link to="/quespaper"> 
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>Sample Papers</h3>
                                    <p>2020-2022</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="assets/images/academic/paper.png" alt=""/>
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
    </div>
  )
}
export default Part;
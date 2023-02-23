import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Syllabus(props) {
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


<title>{"Best Learning Platform Study Buddy - " + props.title}</title>
<link rel="canonical" href={"https://www.studybuddy.store/" + props.title} />
<meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

{/* <title>Best Learning Platform Study Buddy - Science Subject Page</title> */}
<meta name="title" content="Best Learning Platform Study Buddy - Science Subject Page" />
<meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
<meta property="og:title" content="Best Learning Platform Study Buddy - Science Subject Page" />

<meta property="og:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

<meta name="twitter:title" content="Best Learning Platform Study Buddy - Science Subject Page" />
<meta name="twitter:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
<meta property="og:url" content={"https://www.studybuddy.store/" + props.title} />



</Helmet>
            <section className='parts'>

                <CourseHeading heading={props.title} subheading="All Classes" />
                <div className="container py-5">

                    {/* <div className="title mb-3">{props.title}</div> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-title">
                                <h2>Reduced CBSE Syllabus</h2>
                            </div>
                            <div className="text">
                                <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Syllabus - </span> The list of subjects and subsubjects that must be studied during a school year is called the CBSE Syllabus. The summation and main points of the material that will be covered during the teaching and learning process in a certain grade or class are included in the CBSE syllabus.</p>
                                <p className='mb-2'><span className='font-weight-bold text-danger h5'>Annual Exam - </span> The greatest change this year is that CBSE will only hold annual exams going forward. It implies that there will only be one annual exam given to pupils at the end of the semester. However, regular exams and class exams will still be given. But we are aware that these exams only count for 10% of the total.</p>
                                <p className='mb-2'>The CBSE publishes curriculum guides for grades 9, 10, 11, and 12. Every year, this curriculum is updated. The syllabus has undergone significant revisions from CBSE again this year.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-title">
                                <h2> CBSE Syllabus  7, 8, 9, 10, 11, 12 (2022-23) PDF Download: New Reduced Syllabus</h2>
                            </div>
                            <div className="text">
                                <p>Updated NCERT CBSE Syllabus for Class 12, 11, 10, 9, 8, and  7 Curriculum for CBSE, UP Board (High School and Intermediate), MP Board, Gujrat Board (GSEB), and CBSE Board in 2021–2022. You can obtain NCERT Solutions based on the most recent CBSE textbooks in pdf format. Here you may get the CBSE New Syllabus 2021–22 for all classes for effective learning and high marks. This year again CBSE has reduced some topics from the CBSE class 12 syllabus. Let's understand what is deleted from the syllabus and how to get the updated syllabus.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.class7}>
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
                            <Link to={props.class8}>
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
                            <Link to={props.class9}>
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
                            <Link to={props.class10}>
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
                            <Link to={props.class11}>
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
                            <Link to={props.class12}>
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



                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="text-title">
                                <h2> CBSE Syllabus  Details</h2>
                            </div>
                            <div className="text">
                            <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Class - 12 : </span>The Central Board of Secondary Education in New Delhi publishes the CBSE syllabus for class 12 in all disciplines, including English core, Hindi, mathematics, physics, chemistry, and history. Here you may get the current session's new and revised syllabus for free in PDF format.
                                </p>
                                <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Class - 11 : </span>The CBSE will still administer an annual exam with a condensed syllabus in class 11. Every student frequently inquires about what is removed from the course syllabus and what is added this year. The StudyBuddy.store offers a shortened and completely updated syllabus for the academic year 2022–2023. You may obtain the free Class 11 CBSE course curriculum in PDF format from this page. For class XI, the CBSE publishes a syllabus for each stream. Every year, CBSE, New Delhi, updates the curricula for the Science group, Humanities/Arts group, and Commerce group. You can get the most recent syllabus for the current session from this page.
                                </p>
                                <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Class - 10 : </span>The most recent curriculum for CBSE class X Maths, Science, Social Science, English, Hindi FIT, and other courses for the session 2022–23 is available for download from the Studybuddy.store. It is available to download for free in PDF format.
                                </p>
                                <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Class - 9 : </span>Students can get the most recent revisions and updates to the class-IX CBSE annual exam syllabus in PDF format from Studybuddy.store. The CBSE class 9 syllabus has undergone numerous revisions. The new syllabus for class 9 is shorter. Every subject has undergone revisions. Sometimes the course syllabus is changed, and other times new topics are added. For instance, this year, the CBSE extended Email writing to class 9.
                                </p>
                                <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Class - 8 : </span>You may download the class 8 CBSE curriculum in PDF format here. It is based on the most recent exam pattern and NCERT, New Delhi's instructions. The syllabus draughts for grades 1–8 are created by NCERT. These are general recommendations for creating a syllabus for elementary school classrooms.</p>
                                <p className='mb-2'><span className='font-weight-bold text-danger h5 '>Class - 7 : </span>The class-VII curriculum for Science, Math, English, Hindi, Social Science, and other topics is accessible here for free download. It follows the requirements set forth by NCERT and required by CBSE for continuous and complete evaluation of class VII. The New Delhi-based NCERT organisation publishes the curriculum.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Syllabus;
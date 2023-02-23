import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
function Notes(props) {
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


<title>{"Best Learning Platform Study Buddy - " + (props.title ? props.title : "Online Education Hub")}</title>
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
                                <h2> Notes For Class 7, 8, 9, 10, 11, and 12 (All Subjects)</h2>
                            </div>
                            <div className="text">
                                <p>Studybuddy.store CBSE Notes help students prepare for exams in the best possible ways. The use of CBSE Notes helps students save time by helping them remember formulas, definitions, and other crucial information. These important areas of attention are collectively referred to as CBSE Notes. These notes are written by understudies as they study the CBSE course readings. Understudies' test preparation is made simpler and more organised with the help of these CBSE Notes. Studying from CBSE Notes allows students to make well-organized and written preparation plans for the test. By not having to read the entire course text, taking notes allows students to save time during revision. Understudies can quickly and easily find a summary of all the sections in the notes.
                                    With just these notes, students can quickly review all the concepts. Download CBSE notes for classes 6, 7, 8, math, science, and social science from this page. You may also download notes for classes 9 and 10 in math, science, and social science as well as notes for classes 11 and 12 in math, physics, chemistry, and biology.
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
                                <h2>Revision Notes for CBSE Class 7 to 12 PDF Download</h2>
                            </div>
                            <div className="text">
                                <p className='mb-2'>An excellent set of study notes for revision is crucial when getting ready for exams. We provide the finest and most useful CBSE Notes for our loyal readers in order to help you ace your preparation. StudyBuddy.store's CBSE notes will give you an overview of all the crucial concepts and pertinent material and will also draw attention to key citations.The value of the concepts studied in class can be made clear to school kids with the use of CBSE notes. You won't be able to remember all that is taught in class, even if you are a student with a strong memory.

                                    The retention power, however, multiplies if you keep written notes or records. Teachers want you to be an adult and refrain from spoon-feeding the children when you advance to higher grades, such as from class 6 onward.


                                </p>
                                <p className='mb-2'>The value of the concepts studied in class can be made clear to school kids with the use of CBSE notes. You won't be able to remember all that is taught in class, even if you are a student with a strong memory.

                                    The retention power, however, multiplies if you keep written notes or records. Teachers want you to be an adult and refrain from spoon-feeding the children when you advance to higher grades, such as from class 6 onward.
                                    The value of the concepts studied in class can be made clear to school kids with the use of CBSE notes. You won't be able to remember all that is taught in class, even if you are a student with a strong memory.

                                    The retention power, however, multiplies if you keep written notes or records. Teachers want you to be an adult and refrain from spoon-feeding the children when you advance to higher grades, such as from class 6 onward.
                                </p>
                                <p className='mb-2'>It is the responsibility of each student to take their own notes throughout class. Although handwritten notes are preferred, you can get the most recent and efficient CBSE notes for all classes from the website if you didn't have time to create your notes or are under time constraint for an exam.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <GoToTop/>
        </div>
    )
}
export default Notes;
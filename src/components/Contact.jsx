import React from 'react';
// import { useState } from 'react';
import CourseHeading from './CourseHeading';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
export default function Contact() {
    const [state, handleSubmit] = useForm("xlevzplg");
    if (state.succeeded) {
        return (
            <div className="col-lg-6 mx-auto mt-5">
                <div className="align-items-center">
                    <div text-center><p>Thanks for joining!</p>
                        <a href="/contact"><div className="btn btn-primary">Back to contact page</div></a>

                    </div>
                </div>
            </div>
        );
    }
    return (
        <section>
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


<title>Best Learning Platform Study Buddy - Contact Us</title>
<link rel="canonical" href="https://www.studybuddy.store/contact/" />
<meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

{/* <title>Best Learning Platform Study Buddy - Contact Us</title> */}
<meta name="title" content="Best Learning Platform Study Buddy - Contact Us" />
<meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
<meta property="og:title" content="Best Learning Platform Study Buddy - Contact Us" />

<meta property="og:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

<meta name="twitter:title" content="Best Learning Platform Study Buddy - Contact Us" />
<meta name="twitter:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
<meta property="og:url" content="https://www.studybuddy.store/contact/" />



</Helmet>
            <CourseHeading heading="Contact Page" subheading="Contact page" />
            <div className="container pt-60">
                <div className="row">
                    <div className="col-lg-6 mx-auto px-0">
                        <div className="card shadow mt-5 p-40">
                            <div className="card-body">
                                <h1 class="events-title text-center fw-bold">Contact us</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="col-lg-12 my-2">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id='username' name='username' className='form-control' />
                                        <ValidationError
                                            prefix="username"
                                            field="username"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <label htmlFor="email">email</label>
                                        <input type="email" id='email' name='email' className='form-control' />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <label htmlFor="phone">phone</label>
                                        <input type="number" id='phone' name='phone' className='form-control' />
                                        <ValidationError
                                            prefix="phone"
                                            field="phone"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <label htmlFor="message">message</label><br />
                                        <textarea class="textinput" placeholder="Message"></textarea>
                                        <ValidationError
                                            prefix="message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                        {/* <input type="message" id='message' name='message' className='form-control h-100' /> */}
                                    </div>
                                    <div className="col-lg-12 my-4">
                                        <button type="submit" disabled={state.submitting} className="btn btn-primary w-100">
                                            Submit
                                        </button>
                                        {/* <button type='submit' className="btn btn-primary w-100">Submit</button> */}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </section>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import CourseHeading from './CourseHeading'
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
import AboutText from './AboutText';

export default function About() {
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


                <title>Best Learning Platform Study Buddy - About Us</title>
                <link rel="canonical" href="https://www.studybuddy.store/about/" />
                <meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

                {/* <title>Best Learning Platform Study Buddy - About Us</title> */}
                <meta name="title" content="Best Learning Platform Study Buddy - About Us" />
                <meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
                <meta property="og:title" content="Best Learning Platform Study Buddy - About Us" />

                <meta property="og:description"
                    content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

                <meta name="twitter:title" content="Best Learning Platform Study Buddy - About Us" />
                <meta name="twitter:description"
                    content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
                <meta property="og:url" content="https://www.studybuddy.store/about/" />



            </Helmet>
            <CourseHeading heading="About us" subheading="about us" />
            <AboutText />
            <GoToTop />
        </div>
    )
}

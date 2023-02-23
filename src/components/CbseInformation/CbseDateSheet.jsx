import React from 'react';
import CourseHeading from '../CourseHeading';
import CbseInformation from './CbseInformation';
import RecommendedSection from './RecommendedSection';
import { Helmet } from 'react-helmet';
// import CbseInformation10 from './CbseInformation10';

export default function CbseDateSheet() {
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


        <title>Best Learning Platform Study Buddy - CBSE Date Sheet</title>
        <link rel="canonical" href="https://www.studybuddy.store/cbse-date-sheet/" />
        <meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

        {/* <title>Best Learning Platform Study Buddy - CBSE Date Sheet</title> */}
        <meta name="title" content="Best Learning Platform Study Buddy - CBSE Date Sheet" />
        <meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
        <meta property="og:title" content="Best Learning Platform Study Buddy - CBSE Date Sheet" />

        <meta property="og:description"
          content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

        <meta name="twitter:title" content="Best Learning Platform Study Buddy - CBSE Date Sheet" />
        <meta name="twitter:description"
          content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
        <meta property="og:url" content="https://www.studybuddy.store/cbse-date-sheet/" />



      </Helmet>
      <CourseHeading heading="CBSE Date Sheet 2023 (Released) " subheading="Date Sheet -  Class 10 & 12 Exams" />
      <div className="mt-5">
        <CbseInformation />
        {/* <CbseInformation10/> */}
        <RecommendedSection />
      </div>

    </div>
  )
}

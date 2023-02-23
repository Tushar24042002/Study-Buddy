// import './App.css';
// import './assets/css/All.min.css';
// import React from 'react';
// import GoToTop from './components/GoToTop';
import { lazy } from 'react';
import { useEffect } from 'react';
import './components/style2.scss';
import React, { Suspense } from 'react';
const Home = lazy(() => import('./components/Home'));





const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Course12 = lazy(() => import('./components/Course12'));
const Course11 = lazy(() => import('./components/Course11'));
const Course9 = lazy(() => import('./components/Course9'));
const Course8 = lazy(() => import('./components/Course8'));
const Course7 = lazy(() => import('./components/Course7'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Part = lazy(() => import('./components/Part'));


const Notes = lazy(() => import('./components/Notes'));
const Stream = lazy(() => import('./components/Stream'));
const QuesPaper = lazy(() => import('./components/QuesPaper'));
const ScienceSubject = lazy(() => import('./components/ScienceSubject'));
const SeniorSubjects = lazy(() => import('./components/SeniorSubjects'));
const SeniorNotes = lazy(() => import('./components/SeniorNotes'));
const Construction = lazy(() => import('./components/Constructions'));
const Syllabus = lazy(() => import('./components/Syllabus'));
const Syllabusclass = lazy(() => import('./components/Syllabusclass'));


const Solutions = lazy(() => import('./components/Solutions'));
const Secondarypy = lazy(() => import('./components/Secondarypy'));
const SecondarySamplePaperSubject = lazy(() => import('./components/SecondarySamplePaperSubject'));
const SecondarySamplePaper = lazy(() => import('./components/SecondarySamplePaper'));
const CbseDateSheet = lazy(() => import('./components/CbseInformation/CbseDateSheet'));
const CbseInformation10 = lazy(() => import('./components/CbseInformation/CbseInformation10'));
const CbseInformation12 = lazy(() => import('./components/CbseInformation/CbseInformation12'));

const PortfolioSlider = lazy(() => import('./components/Sliders/PortfolioSlider'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

// date sheets page
// const CbseDateSheet = lazy(() => import('./components/CbseInformation/CbseDateSheet'));
import ReactGA from 'react-ga';
ReactGA.initialize('G-LPZKB5JN5S');
ReactGA.pageview(window.location.pathname + window.location.search);


import { useCookies } from "react-cookie";
import "./App.css";

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import CourseHeading from './components/CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {





  return (


    <HelmetProvider>
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


        <title>Best Learning Platform For CBSE Students - Study Buddy</title>
        <link rel="canonical" href="https://www.studybuddy.store/" />
        <meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

        {/* <title>Best Learning Platform For CBSE Students - Study Buddy</title> */}
        <meta name="title" content="Best Learning Platform For CBSE Students - Study Buddy" />
        <meta name="keywords" content="Previous question paper,Study Buddy,   study, CBSE , Syllabus, NCERT Syllabus, CBSE Notes, Date Sheet,National Council of Educational Research and Training (NCERT) , Self Study, Online Study, NCERT,  Question Papers 2022-23, Sample Papers, Class 11 Sample Paper , Class 12 Sample Paper, Class 10 Sample Paper, Class 9 Sample Paper   " />
        <meta property="og:title" content="Best Learning Platform For CBSE Students - Study Buddy" />

        <meta property="og:description"
          content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

        <meta name="twitter:title" content="Best Learning Platform For CBSE Students - Study Buddy" />
        <meta name="twitter:description"
          content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
        <meta property="og:url" content="https://www.studybuddy.store/" />



      </Helmet>
      <div>

        <Router basename={process.env.PUBLIC_URL}>
          <Suspense fallback={<div className="suspensepage"> Please Wait....</div>}>
            <Header />
            <Routes>
              {/* <Header/> */}
              {/* <Route path="/" element={<Home/>}/> */}
              <Route path="*" element={<Construction heading="Sorry page Not Found" subheading="We Fix it As Soon as Possible" />} />
              <Route path='/cbse-date-sheet' element={<CbseDateSheet />} />
              <Route path='/cbse-date-sheet-12' element={<CbseInformation12 />} />
              <Route path='/cbse-date-sheet-10' element={<CbseInformation10 />} />
              <Route path="/course-12" element={<Course12 />} />
              <Route path='/about' element={<About />} />
              <Route path='/part' element={<Part />} />
              <Route path='/quespaper' element={<QuesPaper heading="Sample Paper" title="Sample Question Papers" />} />
              <Route path='/notes' element={<Notes title="Notes Page" class12="/notes-12" class11="/notes-11" class10="/notes-10" class9="/notes-9" class8="/notes-8" class7="/notes-7" />} />




              <Route path='/portfolio' element={<PortfolioSlider />} />
              <Route path='/portfolio-page' element={<Portfolio />} />
              {/* ncert solutions */}
              <Route path='/ncert-solutions' element={<Solutions title="NCERT Solutions" class12="/ncertsolution-12" class11="/ncertsolution-11" class10="/ncertsolution-10" class9="/ncertsolution-9" class8="/ncertsolution-8" class7="/ncertsolution-7" />} />

              <Route path='ncertsolution-12' element={<Construction heading="NCERT Solution -  12th Class" subheading="NCERT Solution Page" />} />
              <Route path='ncertsolution-11' element={<Construction heading="NCERT Solution -  11th Class" subheading="NCERT Solution Page" />} />
              <Route path='ncertsolution-10' element={<Construction heading="NCERT Solution -  10th Class" subheading="NCERT Solution Page" />} />
              <Route path='ncertsolution-9' element={<Construction heading="NCERT Solution -  9th Class" subheading="NCERT Solution Page" />} />
              <Route path='ncertsolution-8' element={<Construction heading="NCERT Solution -  8th Class" subheading="NCERT Solution Page" />} />
              <Route path='ncertsolution-7' element={<Construction heading="NCERT Solution -  7th Class" subheading="NCERT Solution Page" />} />
              {/* ncert solutions */}


              {/* previous year class 10 */}
              <Route path="/py-10" element={<Secondarypy class="10th Class" sub1="/englishpy-10" sub2="/hindipy-10" sub3="/mathpy-10" sub4="/sciencepy-10" sub5="/sstpy-10" sub6="/sanskritpy-10" subject1="english" subject2="hindi" subject3="Maths" subject4="science" subject5="Social Science" subject6="Sanskrit" title="Class 10 - Previous year Question Paper" subsubject="10th Class PY Paper" />} />

              <Route path="/englishpy-10" element={<SeniorNotes title="English - 10th Class Previous Year Question Paper" heading="Class- 10 English  Previous Papers" subheading="Previous Years Question Papers" apis="english-py-10/english-py-10" />} />
              <Route path="/hindipy-10" element={<SeniorNotes title="Hindi - 10th Class Previous Year Question Paper" heading="Class- 10 Hindi  Previous Papers" subheading="Previous Years Question Papers" apis="hindi-py-10/hindi-py-10" />} />
              <Route path="/mathpy-10" element={<SeniorNotes title="Maths - 10th Class Previous Year Question Paper" heading="Class- 10 Maths  Previous Papers" subheading="Previous Years Question Papers" apis="maths-py-10/maths-py-10" />} />
              <Route path="/sciencepy-10" element={<SeniorNotes title="Science - 10th Class Previous Year Question Paper" heading="Class- 10 Science  Previous Papers" subheading="Previous Years Question Papers" apis="science-py-10/science-py-10" />} />
              <Route path="/sstpy-10" element={<SeniorNotes title="Social Science - 10th Class Previous Year Question Paper" heading="Class- 10 Social Science  Previous Papers" subheading="Previous Years Question Papers" apis="sst-py-10/sst-py-10" />} />
              <Route path="/sanskritpy-10" element={<SeniorNotes title="Sanskrit - 10th Class Previous Year Question Paper" heading="Class- 10 Sanskrit  Previous Papers" subheading="Previous Years Question Papers" apis="sanskrit-py-10/sanskrit-py-10" />} />
              {/* previous year class 10 end */}

              {/* previous year class 9 */}
              <Route path="/py-9" element={<Secondarypy class="9th Class" sub1="/englishpy-9" sub2="/hindipy-9" sub3="/mathpy-9" sub4="/sciencepy-9" sub5="/sstpy-9" sub6="/sanskritpy-9" subject1="english" subject2="hindi" subject3="Maths" subject4="science" subject5="Social Science" subject6="Sanskrit" title="Class 9 - Previous year Question Paper" subsubject="9th Class PY Paper" />} />

              <Route path="/englishpy-9" element={<SeniorNotes title="English - 9th Class Previous Year Question Paper" heading="Class- 9 English  Previous Papers" subheading="Previous Years Question Papers" apis="accounts-py-9/accounts-qp-9" />} />
              <Route path="/hindipy-9" element={<SeniorNotes title="Hindi - 9th Class Previous Year Question Paper" heading="Class- 9 Hindi  Previous Papers" subheading="Previous Years Question Papers" apis="hindi-py-9/hindi-qp-9" />} />
              <Route path="/mathpy-9" element={<SeniorNotes title="Maths - 9th Class Previous Year Question Paper" heading="Class- 9 Maths  Previous Papers" subheading="Previous Years Question Papers" apis="maths-py-9/maths-qp-9" />} />
              <Route path="/sciencepy-9" element={<SeniorNotes title="Science - 9th Class Previous Year Question Paper" heading="Class- 9 Science  Previous Papers" subheading="Previous Years Question Papers" apis="science-py-9/science-qp-9" />} />
              <Route path="/sstpy-9" element={<SeniorNotes title="Social Science - 9th Class Previous Year Question Paper" heading="Class- 9 Social Science  Previous Papers" subheading="Previous Years Question Papers" apis="sst-py-9/sst-qp-9" />} />
              <Route path="/sanskritpy-9" element={<SeniorNotes title="Sanskrit - 9th Class Previous Year Question Paper" heading="Class- 9 Sanskrit  Previous Papers" subheading="Previous Years Question Papers" apis="sanskrit-py-9/sanskrit-qp-9" />} />
              {/* previous year class 9 end */}

              {/* previous year class 10 */}
              <Route path="/py-8" element={<Construction heading="NCERT Solution -  7th Class" subheading="NCERT Solution Page" />} />

              <Route path="/englishpy-8" element={<SeniorNotes title="English - 8th Class Previous Year Question Paper" heading="Class- 8 English  Previous Papers" subheading="Previous Years Question Papers" apis="accounts-py-8/accounts-qp-8" />} />
              <Route path="/hindipy-8" element={<SeniorNotes title="Hindi - 8th Class Previous Year Question Paper" heading="Class- 8 Hindi  Previous Papers" subheading="Previous Years Question Papers" apis="hindi-py-8/hindi-qp-8" />} />
              <Route path="/mathpy-8" element={<SeniorNotes title="Maths - 8th Class Previous Year Question Paper" heading="Class- 8 Maths  Previous Papers" subheading="Previous Years Question Papers" apis="maths-py-8/maths-qp-8" />} />
              <Route path="/sciencepy-8" element={<SeniorNotes title="Science - 8th Class Previous Year Question Paper" heading="Class- 8 Science  Previous Papers" subheading="Previous Years Question Papers" apis="science-py-8/science-qp-8" />} />
              <Route path="/sstpy-8" element={<SeniorNotes title="Social Science - 8th Class Previous Year Question Paper" heading="Class- 8 Social Science  Previous Papers" subheading="Previous Years Question Papers" apis="sst-py-8/sst-qp-8" />} />
              <Route path="/sanskritpy-8" element={<SeniorNotes title="Sanskrit - 8th Class Previous Year Question Paper" heading="Class- 8 Sanskrit  Previous Papers" subheading="Previous Years Question Papers" apis="sanskrit-py-8/sanskrit-qp-8" />} />
              {/* previous year class 8 end */}

              {/* previous year class 7 */}
              <Route path="/py-7" element={<Construction heading="NCERT Solution -  7th Class" subheading="NCERT Solution Page" />} />

              <Route path="/englishpy-7" element={<SeniorNotes title="English - 7th Class Previous Year Question Paper" heading="Class- 7 English  Previous Papers" subheading="Previous Years Question Papers" apis="accounts-py-7/accounts-qp-7" />} />
              <Route path="/hindipy-7" element={<SeniorNotes title="Hindi - 7th Class Previous Year Question Paper" heading="Class- 7 Hindi  Previous Papers" subheading="Previous Years Question Papers" apis="hindi-py-7/hindi-qp-7" />} />
              <Route path="/mathpy-7" element={<SeniorNotes title="Maths - 7th Class Previous Year Question Paper" heading="Class- 7 Maths  Previous Papers" subheading="Previous Years Question Papers" apis="maths-py-7/maths-qp-7" />} />
              <Route path="/sciencepy-7" element={<SeniorNotes title="Science - 7th Class Previous Year Question Paper" heading="Class- 7 Science  Previous Papers" subheading="Previous Years Question Papers" apis="science-py-7/science-qp-7" />} />
              <Route path="/sstpy-7" element={<SeniorNotes title="Social Science - 7th Class Previous Year Question Paper" heading="Class- 7 Social Science  Previous Papers" subheading="Previous Years Question Papers" apis="sst-py-7/sst-qp-7" />} />
              <Route path="/sanskritpy-7" element={<SeniorNotes title="Sanskrit - 7th Class Previous Year Question Paper" heading="Class- 7 Sanskrit  Previous Papers" subheading="Previous Years Question Papers" apis="sanskrit-py-7/sanskrit-qp-7" />} />
              {/* previous year class 7 end */}


              {/* syllabus */}
              <Route path='/syllabus' element={<Syllabus title="Syllabus Page" class12="/syllabus-12" class11="/syllabus-11" class10="/syllabus-10" class9="/syllabus-9" class8="/syllabus-8" class7="/syllabus-7" />} />
              <Route path='/notes-12' element={<Stream class="class-12" arts="/arts12" commerce="/commerce12" science="/science12" title="Choose Stream" />} />
              <Route path='/notes-11' element={<Stream class="class-11" arts="/arts11" commerce="/commerce11" science="/science11" title="Choose Stream" />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/notes-10' element={<Construction heading="Notes - 10th Class" subheading="All Completed Notes" />} />
              <Route path='/notes-9' element={<Construction heading="Notes - 9th Class" subheading="All Completed Notes" />} />
              <Route path='/notes-8' element={<Construction heading="Notes - 8th Class" subheading="All Completed Notes" />} />
              <Route path='/notes-7' element={<Construction heading="Notes - 7th Class" subheading="All Completed Notes" />} />



              {/* notes section  */}
              {/* class 12th */}
              <Route path="/science12" element={<ScienceSubject class="12th Class" sub1="/physicsnotes12" sub2="/chemistrynotes12" sub3="/mathnotes12" sub4="/biologynotes12" sub5="/physicalnotes12" sub6="/computersciencenotes12" subject1="Physics" subject2="Chemistry" subject3="Maths" subject4="Biology" subject5="Physical" subject6="Computer Science" title="Science | 12th Class Notes" stream="Science" subsubject="12th Class Notes" />} />
              <Route path='/computersciencenotes12' element={<Construction />} />
              <Route path='/accountsnotes12' element={<Construction />} />
              <Route path='/economicsnotes12' element={<Construction />} />
              <Route path='/hindinotes12' element={<Construction />} />
              <Route path='/physicalnotes12' element={<Construction />} />
              <Route path='/historynotes12' element={<Construction />} />
              <Route path='="/sociologynotes12' element={<Construction />} />
              <Route path='/englishnotes12' element={<Construction />} />
              {/* <Route path='computersciencenotes12' element ={<Construction/>}/>
<Route path='computersciencenotes12' element ={<Construction/>}/>
<Route path='computersciencenotes12' element ={<Construction/>}/> */}

              <Route path="/commerce12" element={<ScienceSubject title="Commerce | 12th Class Notes" stream="Commerce" class="12th Class" sub1="/accountsnotes12" sub2="/bussinessnotes12" sub3="/mathnotes12" sub4="/economicsnotes12" sub5="/hindinotes12" sub6="/physicalnotes12" subject1="Accounts" subject2="Bussiness Studies" subject3="Maths" subject4="Economics" subject5="Hindi" subject6="Physical Education" subsubject="12th Class Notes" />} />


              <Route path="/arts12" element={<ScienceSubject title="Arts | 12th Class Notes" stream="Arts" class="12th Class" sub1="/historynotes12" sub2="/sociologynotes12" sub3="/englishnotes12" sub4="/economicsnotes12" sub5="/hindinotes12" sub6="/physicalnotes12" subject1="History" subject2="Sociology" subject3="English" subject4="Economics" subject5="Hindi" subject6="Physical Education" subsubject="12th Class Notes" />} />

              <Route path="/biologynotes12" element={<SeniorNotes title="Notes | class- 12 Biology Notes" heading="class- 12 Biology Notes" subheading="all Chapter Notes" apis="notes-bio-12/bio-12" />} />
              <Route path="/chemistrynotes12" element={<SeniorNotes title="Notes | class- 12 Chemistry Notes" heading="class- 12 Chemistry Notes" subheading="all Chapter Notes" apis="notes-chemistry-12/Chemistry-12" />} />
              <Route path="/physicsnotes12" element={<SeniorNotes title="Notes | class- 12 Physics Notes" heading="class- 12 Physics Notes" subheading="all Chapter Notes" apis="notes-physics-12/physics-12" />} />

              <Route path="/mathnotes12" element={<SeniorNotes title="Notes | class- 12 Maths Notes" heading="class- 12 Maths Notes" subheading="all Chapter Notes" apis="notes-maths-12/maths-12" />} />


              <Route path="/bussinessnotes12" element={<SeniorNotes title="Notes | class- 12 Bussiness Studies Notes" heading="class- 12 Bussiness Studies Notes" subheading="all Chapter Notes" apis="notes-bussiness-12/bussiness-12" />} />



              {/* class 11th */}
              <Route path="/science11" element={<ScienceSubject class="11th Class" sub1="/physicsnotes11" sub2="/chemistrynotes11" sub3="/mathnotes11" sub4="/biologynotes11" sub5="/physicalnotes11" sub6="/computersciencenotes11" subject1="Physics" subject2="Chemistry" subject3="Maths" subject4="Biology" subject5="Physical" subject6="Computer Science" title="Science | 11th Class Notes" stream="Science" subsubject="11th Class Notes" />} />

              <Route path="/commerce11" element={<ScienceSubject title="Commerce | 11th Class Notes" stream="Commerce" class="11th Class" sub1="/accountsnotes11" sub2="/bussinessnotes11" sub3="/mathnotes11" sub4="/economicsnotes11" sub5="/hindinotes11" sub6="/physicalnotes11" subject1="Accounts" subject2="Bussiness Studies" subject3="Maths" subject4="Economics" subject5="Hindi" subject6="Physical Education" subsubject="11th Class Notes" />} />


              <Route path="/arts11" element={<ScienceSubject title="Arts | 11th Class Notes" stream="Arts" class="11th Class" sub1="/historynotes11" sub2="/sociologynotes11" sub3="/englishnotes11" sub4="/economicsnotes11" sub5="/hindinotes11" sub6="/physicalnotes11" subject1="History" subject2="Sociology" subject3="English" subject4="Economics" subject5="Hindi" subject6="Physical Education" subsubject="11th Class Notes" />} />
              <Route path='/computersciencenotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/accountsnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/economicsnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/hindinotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/physicalnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/historynotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='="/sociologynotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/englishnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />


              <Route path='/physicsnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/chemistrynotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='="/biologynotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/bussinessnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />
              <Route path='/mathnotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />

              <Route path='/sociologynotes11' element={<Construction heading="Notes - 11th Class" subheading="All Completed Notes" />} />







              {/* sample papers class 7th to 12th */}
              {/* <Route path="/courses-12" element={<SeniorNotes heading="12th Sample Paper 2022-23"  title="12th Sample Paper 2022-23" subheading="Latest Sample Papers" apis="practice/courses-12" />} /> */}
              <Route path='/courses-12' element={<Stream title="Sample Paper 12th Class | Stream" class="class-12 sample paper" arts="/arts-sp-12" commerce="/commerce-sp-12" science="/science-sp-12" />} />

              <Route path="/science-sp-12" element={<SeniorSubjects title="12th Sample Paper 2022-23 | Science" class="12th Class" sub1="/physics-sp-12" sub2="/chemistry-sp-12" sub3="/math-sp-12" sub4="/biology-sp-12" sub5="/physical-sp-12" sub6="/cpp-sp-12" sub7="/english-sp-12" sub8="/hindi-sp-12" subject1="Physics" subject2="Chemistry" subject3="Maths" subject4="Biology" subject5="Physical" subject6="Computer Science" subject7="English" subject8="Hindi Elective" stream="Science" subsubject="Sample Papers 2022-23" />} />


              <Route path="/arts-sp-12" element={<SeniorSubjects title="Arts Sample Paper Question Paper | Arts" class="12th Class" sub1="/sociology-sp-12" sub2="/economics-sp-12" sub3="/history-sp-12" sub4="/political-sp-12" sub5="/physical-sp-12" sub6="/geography-sp-12" sub7="/english-sp-12" sub8="/hindi-sp-12" subject1="Sociology" subject2="Economics" subject3="History" subject4="Political Science" subject5="Physical Education" subject6="Geography" subject7="English" subject8="Hindi Elective" stream="Humanities" subsubject="Sample Papers 2022-23" />} />

              <Route path="/commerce-sp-12" element={<SeniorSubjects title="Commerce Sample Paper Question Paper | Commerce" class="12th Class" sub1="/accounts-sp-12" sub2="/bussiness-sp-12" sub3="/math-sp-12" sub4="/economics-sp-12" sub5="/political-sp-12" sub6="/english-sp-12" sub7="/hindi-sp-12" sub8="/physical-sp-12" subject1="Accounts" subject2="Bussiness Studies" subject3="Maths" subject4="Economics" subject5="Political Science" subject6="English" subject7="Hindi Elective" subject8="Physical Education" stream="Commerce" subsubject="Sample Papers 2022-23" />} />

              {/* <Route path="/science-sp-12" element={<SecondarySamplePaperSubject heading="12th Sample Paper 2022-23" title="12th Sample Paper 2022-23" line=" 12th Sample Papers 2022-23 " sub1="English" sub2="Biology" sub3="Physics" sub4="Maths" sub5="Chemistry" sub6="Physical Education" subject1="/sample-english-12" subject2="/sample-biology-12" subject3="/sample-physics-12" subject4="/sample-maths-12" subject5="/sample-chemistry-12" subject6="/sample-physical-12" />} /> */}

              {/* class 12th */}

              <Route path="/english-sp-12" element={<SecondarySamplePaper heading="12th English Sample Paper 2022-23" title="12th English Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-english-12/english-sp-12" />} />
              <Route path="/hindi-sp-12" element={<SecondarySamplePaper heading="12th Hindi Sample Paper 2022-23" title="12th Hindi Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-hindi-12/hindi-sp-12" />} />
              <Route path="/math-sp-12" element={<SecondarySamplePaper heading="12th Maths Sample Paper 2022-23" title="12th Maths Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-maths-12/maths-sp-12" />} />
              <Route path="/accounts-sp-12" element={<SecondarySamplePaper heading="12th accounts Sample Paper 2022-23" title="12th accounts Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-accounts-12/accounts-sp-12" />} />
              <Route path="/bussiness-sp-12" element={<SecondarySamplePaper heading="12th bussiness Sample Paper 2022-23" title="12th bussiness Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-bussiness-12/bussiness-sp-12" />} />
              <Route path="/economics-sp-12" element={<SecondarySamplePaper heading="12th economics Sample Paper 2022-23" title="12th economics Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-economics-12/economics-sp-12" />} />
              <Route path="/physical-sp-12" element={<SecondarySamplePaper heading="12th physical Sample Paper 2022-23" title="12th physical Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-physical-12/physical-sp-12" />} />
              <Route path="/physics-sp-12" element={<SecondarySamplePaper heading="12th physics Sample Paper 2022-23" title="12th physics Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-physics-12/physics-sp-12" />} />
              <Route path="/chemistry-sp-12" element={<SecondarySamplePaper heading="12th chemistry Sample Paper 2022-23" title="12th chemistry Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-chemistry-12/chemistry-sp-12" />} />
              <Route path="/biology-sp-12" element={<SecondarySamplePaper heading="12th biology Sample Paper 2022-23" title="12th biology Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-biology-12/biology-sp-12" />} />
              <Route path="/geography-sp-12" element={<SecondarySamplePaper heading="12th geography Sample Paper 2022-23" title="12th geography Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-geography-12/geography-sp-12" />} />
              <Route path="/history-sp-12" element={<SecondarySamplePaper heading="12th history Sample Paper 2022-23" title="12th history Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-history-12/history-sp-12" />} />
              <Route path="/cpp-sp-12" element={<SecondarySamplePaper heading="12th biology Sample Paper 2022-23" title="12th biology Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-biology-12/biology-sp-12" />} />
              <Route path="/sociology-sp-12" element={<SecondarySamplePaper heading="12th sociology Sample Paper 2022-23" title="12th sociology Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sociology-12/sociology-sp-12" />} />
              <Route path="/political-sp-12" element={<SecondarySamplePaper heading="12th political Sample Paper 2022-23" title="12th political Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-political-12/political-sp-12" />} />


              <Route path="/courses-11" element={<SeniorNotes heading="11th Sample Paper 2022-23" title="11th Sample Paper 2022-23" subheading="Latest Sample Papers" apis="practice11/course-11" />} />
              <Route path="/courses-10" element={<SecondarySamplePaperSubject heading="10th Sample Paper 2022-23" title="10th Sample Paper 2022-23" line=" 10th Sample Papers 2022-23 " sub1="English" sub2="Hindi" sub3="Maths" sub4="Science" sub5="Social Science" sub6="Sanskrit" subject1="/sample-english-10" subject2="/sample-hindi-10" subject3="/sample-maths-10" subject4="/sample-science-10" subject5="/sample-sst-10" subject6="/sample-sanskrit-10" />} />
              <Route path="/courses-9" element={<SecondarySamplePaperSubject heading="9th Sample Paper 2022-23" title="9th Sample Paper 2022-23" line=" 9th Sample Papers 2022-23 " sub1="English" sub2="Hindi" sub3="Maths" sub4="Science" sub5="Social Science" sub6="Sanskrit" subject1="/sample-english-9" subject2="/sample-hindi-9" subject3="/sample-maths-9" subject4="/sample-science-9" subject5="/sample-sst-9" subject6="/sample-sanskrit-9" />} />
              <Route path="/courses-8" element={<SecondarySamplePaperSubject heading="8th Sample Paper 2022-23" title="8th Sample Paper 2022-23" line=" 8th Sample Papers 2022-23 " sub1="English" sub2="Hindi" sub3="Maths" sub4="Science" sub5="Social Science" sub6="Sanskrit" subject1="/sample-english-8" subject2="/sample-hindi-8" subject3="/sample-maths-8" subject4="/sample-science-8" subject5="/sample-sst-8" subject6="/sample-sanskrit-8" />} />
              <Route path="/courses-7" element={<SecondarySamplePaperSubject heading="7th Sample Paper 2022-23" title="7th Sample Paper 2022-23" line=" 7th Sample Papers 2022-23 " sub1="English" sub2="Hindi" sub3="Maths" sub4="Science" sub5="Social Science" sub6="Sanskrit" subject1="/sample-english-7" subject2="/sample-hindi-7" subject3="/sample-maths-7" subject4="/sample-science-7" subject5="/sample-sst-7" subject6="/sample-sanskrit-7" />} />


              <Route path="/sample-english-10" element={<SecondarySamplePaper heading="10th English Sample Paper 2022-23" title="10th English Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-english-10/english-qp-10" />} />
              <Route path="/sample-science-10" element={<SecondarySamplePaper heading="10th Science Sample Paper 2022-23" title="10th Science Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-science-10/science-qp-10" />} />

              <Route path="/sample-hindi-10" element={<SecondarySamplePaper heading="10th Hindi Sample Paper 2022-23" title="10th Hindi Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-hindi-10/hindi-qp-10" />} />
              <Route path="/sample-maths-10" element={<SecondarySamplePaper heading="10th Maths Sample Paper 2022-23" title="10th Maths Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-maths-10/maths-qp-10" />} />

              <Route path="/sample-sst-10" element={<SecondarySamplePaper heading="10th Sst Sample Paper 2022-23" title="10th Sst Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sst-10/sst-qp-10" />} />
              <Route path="/sample-sanskrit-10" element={<SecondarySamplePaper heading="10th Sanskrit Sample Paper 2022-23" title="10th Sanskrit Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sanskrit-10/sanskrit-qp-10" />} />

              <Route path="/sample-english-10" element={<SecondarySamplePaper heading="10th English Sample Paper 2022-23" title="10th English Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-english-10/english-qp-10" />} />
              <Route path="/sample-science-10" element={<SecondarySamplePaper heading="10th Science Sample Paper 2022-23" title="10th Science Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-science-10/science-qp-10" />} />

              {/* class 9 sample paper */}
              <Route path="/sample-hindi-9" element={<SecondarySamplePaper heading="9th Hindi Sample Paper 2022-23" title="9th Hindi Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-hindi-9/hindi-qp-9" />} />
              <Route path="/sample-maths-9" element={<SecondarySamplePaper heading="9th Maths Sample Paper 2022-23" title="9th Maths Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-maths-9/maths-qp-9" />} />

              <Route path="/sample-sst-9" element={<SecondarySamplePaper heading="9th Sst Sample Paper 2022-23" title="9th Sst Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sst-9/sst-qp-9" />} />
              <Route path="/sample-sanskrit-9" element={<SecondarySamplePaper heading="9th Sanskrit Sample Paper 2022-23" title="9th Sanskrit Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sanskrit-9/sanskrit-qp-9" />} />


              {/* class 8 sample paper */}
              <Route path="/sample-english-8" element={<SecondarySamplePaper heading="8th English Sample Paper 2022-23" title="8th English Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-english-8/english-qp-8" />} />
              <Route path="/sample-science-8" element={<SecondarySamplePaper heading="8th Science Sample Paper 2022-23" title="8th Science Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-science-8/science-qp-8" />} />

              <Route path="/sample-hindi-8" element={<SecondarySamplePaper heading="8th Hindi Sample Paper 2022-23" title="8th Hindi Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-hindi-8/hindi-qp-8" />} />
              <Route path="/sample-maths-8" element={<SecondarySamplePaper heading="8th Maths Sample Paper 2022-23" title="8th Maths Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-maths-8/maths-qp-8" />} />

              <Route path="/sample-sst-8" element={<SecondarySamplePaper heading="8th Sst Sample Paper 2022-23" title="8th Sst Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sst-8/sst-qp-8" />} />
              <Route path="/sample-sanskrit-8" element={<SecondarySamplePaper heading="8th Sanskrit Sample Paper 2022-23" title="8th Sanskrit Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sanskrit-8/sanskrit-qp-8" />} />


              {/* sample paper class 7 */}

              <Route path="/sample-english-7" element={<SecondarySamplePaper heading="7th English Sample Paper 2022-23" title="7th English Sample Paper 2022-23" subheading="Latest Sample Papers" apis="/sample-paper-english-7/english-qp-7" />} />
              <Route path="/sample-science-7" element={<SecondarySamplePaper heading="7th Science Sample Paper 2022-23" title="7th Science Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-science-7/science-qp-7" />} />

              <Route path="/sample-hindi-7" element={<SecondarySamplePaper heading="7th Hindi Sample Paper 2022-23" title="7th Hindi Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-hindi-7/hindi-qp-7" />} />
              <Route path="/sample-maths-7" element={<SecondarySamplePaper heading="7th Maths Sample Paper 2022-23" title="7th Maths Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-maths-7/maths-qp-7" />} />

              <Route path="/sample-sst-7" element={<SecondarySamplePaper heading="7th Sst Sample Paper 2022-23" title="7th Sst Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sst-7/sst-qp-7" />} />
              <Route path="/sample-sanskrit-7" element={<SecondarySamplePaper heading="7th Sanskrit Sample Paper 2022-23" title="7th Sanskrit Sample Paper 2022-23" subheading="Latest Sample Papers" apis="sample-paper-sanskrit-7/sanskrit-qp-7" />} />
              {/* <Route path="/courses-9" element={<SeniorNotes heading="9th Sample Paper 2022-23" title="9th Sample Paper 2022-23" subheading="Latest Sample Papers" apis="practice09/courses-9" />} />
          <Route path="/courses-8" element={<SeniorNotes heading="10th Sample Paper 2022-23" title="8th Sample Paper 2022-23" subheading="Latest Sample Papers" apis="practice10/courses-10" />} />
          <Route path="/courses-7" element={<SeniorNotes heading="10th Sample Paper 2022-23" title="7th Sample Paper 2022-23" subheading="Latest Sample Papers" apis="practice10/courses-10" />} /> */}


              {/* sample papers class 7th to 12th end */}





              {/* notes section end */}
              {/* class 12th syllabus */}

              <Route path="/syllabus-12" element={<Syllabusclass class="Class 12th" title="Syllabus | 12th Syllabus 2022-23" heading="12th Syllabus 2022-23" subheading="Latest Syllabus" apis="syllabus-12-class/syllabus-12" />} />

              {/* class 11th syllabus */}

              <Route path="/syllabus-11" element={<Syllabusclass title="Syllabus | 11th Syllabus 2022-23" heading="11th Syllabus 2022-23" subheading="Latest Syllabus" apis="syllabus-11-class/syllabus-11" />} />

              {/* class 10th syllabus  syllabus-10-class/syllabus-10*/}

              <Route path="/syllabus-10" element={<Syllabusclass title="Syllabus | 10th Syllabus 2022-23" heading="10th Syllabus 2022-23" subheading="Latest Syllabus" apis="syllabus-10-class/syllabus-10" />} />

              {/* class 9th syllabus */}

              <Route path="/syllabus-9" element={<Syllabusclass title="Syllabus | 9th Syllabus 2022-23" heading="9th Syllabus 2022-23" subheading="Latest Syllabus" apis="syllabus-9-class/syllabus-9" />} />

              {/* class 8th syllabus */}

              <Route path="/syllabus-8" element={<Syllabusclass title="Syllabus | 8th Syllabus 2022-23" heading="8th Syllabus 2022-23" subheading="Latest Syllabus" apis="syllabus-8-class/syllabus-8" />} />

              {/* class 7th syllabus */}

              <Route path="/syllabus-7" element={<Syllabusclass title="Syllabus | 7th Syllabus 2022-23" heading="7th Syllabus 2022-23" subheading="Latest Syllabus" apis="syllabus-7-class/syllabus-7" />} />

              {/* class 12th subjects */}


              {/* previous year 12 and 10 */}
              <Route path='/py-ques' element={<Notes title="Previous Year Question Paper" class12="/py-12" class11="/py-11" class10="/py-10" class9="/py-9" class8="/py-8" class7="/py-7" />} />
              <Route path='/py-12' element={<Stream title="Previous Year Question Paper | Stream" class="class-12 PY - Paper" arts="/arts-py-12" commerce="/commerce-py-12" science="/science-py-12" />} />
              <Route path="/science-py-12" element={<SeniorSubjects title="Science Previous Year Question Paper | Science" class="12th Class" sub1="/physicspy12" sub2="/chemistrypy12" sub3="/mathpy12" sub4="/biologypy12" sub5="/physicalpy12" sub6="/cpppy12" sub7="/englishpy12" sub8="/hindipy12" subject1="Physics" subject2="Chemistry" subject3="Maths" subject4="Biology" subject5="Physical" subject6="Computer Science" subject7="English" subject8="Hindi Core" stream="Science" subsubject="Previous Year Papers" />} />

              <Route path="/arts-py-12" element={<SeniorSubjects title="Arts Previous Year Question Paper | Arts" class="12th Class" sub1="/sociologypy12" sub2="/economicspy12" sub3="/historypy12" sub4="/politicalpy12" sub5="/physicalpy12" sub6="/mathpy12" sub7="/englishpy12" sub8="/hindipy12" subject1="Sociology" subject2="Economics" subject3="History" subject4="Political Science" subject5="Physical Education" subject6="Maths" subject7="English" subject8="Hindi Core" stream="Humanities" subsubject="Previous Year Papers" />} />

              <Route path="/commerce-py-12" element={<SeniorSubjects title="Commerce Previous Year Question Paper | Commerce" class="12th Class" sub1="/accountspy12" sub2="/bussinesspy12" sub3="/mathpy12" sub4="/economicspy12" sub5="/politicalpy12" sub6="/englishpy12" sub7="/hindipy12" sub8="/physicalpy12" subject1="Accounts" subject2="Bussiness Studies" subject3="Maths" subject4="Economics" subject5="Political Science" subject6="English" subject7="Hindi Core" subject8="Physical Education" stream="Commerce" subsubject="Previous Year Papers" />} />


              <Route path="/mathpy12" element={<SeniorNotes title="Maths - 12 Previous Year Question Paper | Maths - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="maths-py-12/maths-qp-12" />} />

              <Route path="/physicspy12" element={<SeniorNotes title="Physics -12 Previous Year Question Paper | Physics -12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="physics-py-12/physics-qp-12" />} />
              <Route path="/chemistrypy12" element={<SeniorNotes title="Chemistry - 12 Previous Year Question Paper | Chemistry - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="chemistry-py-12/chemistry-qp-12" />} />
              <Route path="/biologypy12" element={<SeniorNotes title="Biology - 12 Previous Year Question Paper | Biology - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="biology-py-12/biology-qp-12" />} />
              <Route path="/physicalpy12" element={<SeniorNotes title="Physical Education - 12 Previous Year Question Paper | Physical Education - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="physical-py-12/physical-qp-12" />} />
              <Route path="/cpppy12" element={<SeniorNotes title="Computer Science - 12 Previous Year Question Paper | Computer Science - 12" heading="class- 12 Previous Papers" subheading="Previous Years C++" apis="cpp-py-12/cpp-qp-12" />} />
              <Route path="/englishpy12" element={<SeniorNotes title="English - 12 Previous Year Question Paper | English - 12" heading="class- 12 Previous Papers" subheading="Previous Years English Paper" apis="eng-py-12/english-qp-12" />} />
              <Route path="/hindipy12" element={<SeniorNotes title="Hindi - 12 Previous Year Question Paper | Hindi - 12" heading="class- 12 Previous Papers" subheading="Previous Years Hindi Paper" apis="hindi-py-12/hindi-qp-12" />} />




              <Route path="/accountspy12" element={<SeniorNotes title="Accounts - 12 Previous Year Question Paper | Accounts - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="accounts-py-12/accounts-qp-12" />} />
              <Route path="/bussinesspy12" element={<SeniorNotes title="Bussiness Studies - 12 Previous Year Question Paper | Bussiness Studies - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="bussiness-py-12/bussiness-qp-12" />} />
              <Route path="/economicspy12" element={<SeniorNotes title="Economics - 12 Previous Year Question Paper | Economics - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="economics-py-12/economics-qp-12" />} />
              <Route path="/politicalpy12" element={<SeniorNotes title="political Science - 12 Previous Year Question Paper | political Science - 12" heading="class- 12 Previous Papers" subheading="Previous Years Question Papers" apis="political-py-12/political-qp-12" />} />
              <Route path="/sociologypy12" element={<SeniorNotes title="Sociology - 12 Previous Year Question Paper | Sociology - 12" heading="class- 12 Previous Papers" subheading="Previous Years C++" apis="sociology-py-12/sociology-qp-12" />} />
              <Route path="/historypy12" element={<SeniorNotes title="History - 12 Previous Year Question Paper | History - 12" heading="class- 12 Previous Papers" subheading="Previous Years English Paper" apis="history-py-12/history-qp-12" />} />
              <Route path="/hindipy12" element={<SeniorNotes title="Hindi - 12 Previous Year Question Paper | Hindi - 12" heading="class- 12 Previous Papers" subheading="Previous Years Hindi Paper" apis="hindi-py-12/hindi-qp-12" />} />

              <Route path="*" component={PageNotFound} />


              <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
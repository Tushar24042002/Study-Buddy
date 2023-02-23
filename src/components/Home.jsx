import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Part from './Part';
import Latest from './Latest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
import AboutText from './AboutText';
import CbseInformation10 from './CbseInformation/CbseInformation10';
import CbseDateSheet from './CbseInformation/CbseDateSheet';
import CbseInformation from './CbseInformation/CbseInformation';
import RecommendedSection from './CbseInformation/RecommendedSection';
import PortfolioSlider from './Sliders/PortfolioSlider';

export default function Home() {
    //   plugins: [
    //     // other plugins,
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery': 'jquery'
    //     }),
    // ],
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


<title>Best Learning Platform For CBSE Students - Study Buddy</title>
<link rel="canonical" href="https://www.studybuddy.store/" />
<meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

{/* <title>Best Learning Platform For CBSE Students - Study Buddy</title> */}
<meta name="title" content="Best Learning Platform For CBSE Students - Study Buddy" />
<meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
<meta property="og:title" content="Best Learning Platform For CBSE Students - Study Buddy" />

<meta property="og:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

<meta name="twitter:title" content="Best Learning Platform For CBSE Students - Study Buddy" />
<meta name="twitter:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
<meta property="og:url" content="https://www.studybuddy.store/" />



</Helmet>
            <div className="react-wrapper">
                <div className="react-wrapper-inner">

                    {/* <!--================= Slider Section Start Here =================--> */}
                    <div className="react-slider-part home-four-slider-part">
                        <OwlCarousel className=" home-sliders home-four-sliders home2 owl-main  owl-theme" items={1} loop nav>
                            {/* <div className ="home-sliders home-four-sliders home2 owl-carousel"> */}
                            <div className="single-slide">
                                <div className="container">
                                    <div className="slider-content">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7">
                                                <div className="content-part">
                                                    <span class="slider-pretitle">Learn Anything! Anywhere! Anyone!</span>
                                                    <h1 class="slider-title">
                                                        Best Learning Platform For CBSE Students - Study Buddy<br />
                                                    </h1>
                                                    <p className='text-center'>

                                                        Study Buddy provides you complete solutions to your doubts, where we provide all CBSE  questions with NCERT solutions, CBSE Revision Notes, previous year question papers and many more at free of cost.</p>
                                                        <a href="#parts">  <button class="slider-btn">GET STARTED NOW</button></a>
                                                    <ul class="social-links home-four-social-links">
                                                        <li><a href="#"><span aria-hidden="true" class="social_facebook"></span></a>
                                                        </li>
                                                        <li><a href="#"><span aria-hidden="true" class="social_instagram"></span></a>
                                                        </li>
                                                        <li><a href="#"><span aria-hidden="true" class="social_twitter"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 mobile-none">
                                                <div className=""><img src="./assets/images/banner2/study2.png" alt="hero" width="100%" /></div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="ellipse  scrollDown"><a href="#parts"><img class="down"
                                    src="assets/images/home4/ellipse.png" alt="ellipse" /></a><FontAwesomeIcon icon="fa-solid fa-angle-down" /> <i class="fa-regular fa-arrow-down"></i></div>
                            </div>
                            <div className="single-slide single-slide2">
                            <div className="container">
                                    <div className="slider-content">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7">
                                                <div className="content-part">
                                                    <span class="slider-pretitle">Learn Anything! Anywhere! Anyone!</span>
                                                    <h1 class="slider-title">
                                                        Best Learning Platform For CBSE Students - Study Buddy<br />
                                                    </h1>
                                                    <p className='text-center'>

                                                        StudyBuddy provides you complete solutions to your doubts, where we provide all questions with detailed solutions, study material, previous year question papers CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test and many more at free of cost.</p>
                                                        <a href="#parts">  <button class="slider-btn">GET STARTED NOW</button></a>
                                                    <ul class="social-links home-four-social-links">
                                                        <li><a href="#"><span aria-hidden="true" class="social_facebook"></span></a>
                                                        </li>
                                                        <li><a href="#"><span aria-hidden="true" class="social_instagram"></span></a>
                                                        </li>
                                                        <li><a href="#"><span aria-hidden="true" class="social_twitter"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 mobile-none">
                                                <div className=""><img src="./assets/images/banner2/study2.png" alt="hero" width="100%" /></div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="ellipse  scrollDown"><a href="#parts"><img class="down"
                                    src="assets/images/home4/ellipse.png" alt="ellipse-down" /></a><i class="arrow_down"></i></div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <Part />
                    <CbseInformation/>
                    <RecommendedSection/>
                    <div className="catagories-section home_four-section pt---100 pb---100">
                        <div className="container">
                            <div className="section-title">Syllbus</div>
                            <div className="sub-title">Top Syllabus</div>
                            <div className="row justify-content-between align-center">
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <a href="/syllabus-7">
                                        <div className="catagory-item">
                                            <div className="catagory-picture">
                                                <img src="./assets/images/home4/catagories/1.png" alt="catagory-picture" />
                                            </div>
                                            <div className="content">
                                                <div className="item-title"><a href="coureses-grid.html">7<sup>th</sup> Class</a></div>
                                                <div className="info">10+ Courses</div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <a href="/syllabus-8">
                                        <div className="catagory-item">
                                            <div className="catagory-picture">
                                                <img src="./assets/images/home4/catagories/2.png" alt="catagory-picture" />
                                            </div>
                                            <div className="content">
                                                <div className="item-title"><a href="coureses-grid.html">8<sup>th</sup> Class</a></div>
                                                <div className="info">10+ Courses</div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <a href="/syllabus-9">
                                        <div className="catagory-item">
                                            <div className="catagory-picture">
                                                <img src="./assets/images/home4/catagories/3.png" alt="catagory-picture" />
                                            </div>
                                            <div className="content">
                                                <div className="item-title"><a href="coureses-grid.html">9<sup>th</sup> Class</a></div>
                                                <div className="info">10+ Courses</div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <a href="/syllabus-10">
                                        <div className="catagory-item">
                                            <div className="catagory-picture">
                                                <img src="./assets/images/home4/catagories/4.png" alt="catagory-picture" />
                                            </div>
                                            <div className="content">
                                                <div className="item-title"><a href="coureses-grid.html">10<sup>th</sup> Class</a></div>
                                                <div className="info">10+ Courses  <span className='alert alert-danger px-2 py-1 p-0'>(Boards)</span></div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <a href="/syllabus-11">
                                        <div className="catagory-item">
                                            <div className="catagory-picture">
                                                <img src="./assets/images/home4/catagories/5.png" alt="catagory-picture" />
                                            </div>
                                            <div className="content">
                                                <div className="item-title"><a href="coureses-grid.html">11<sup>th</sup> Class</a></div>
                                                <div className="info">10+ Courses</div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <a href="/syllabus-12">
                                        <div className="catagory-item">
                                            <div className="catagory-picture">
                                                <img src="./assets/images/home4/catagories/6.png" alt="catagory-picture" />
                                            </div>
                                            <div className="content">
                                                <div className="item-title"><a href="coureses-grid.html">12<sup>th</sup> Class </a></div>
                                                <div className="info">10+ Courses <span className='alert alert-danger px-2 py-1 p-0'> (Boards)</span></div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <Latest />   
                    <AboutText/>               
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}

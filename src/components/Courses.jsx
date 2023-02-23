// import { useLocation } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';

let PageSize = 10;
class Course extends React.Component {
  // Constructor 
  constructor(props) {
    super(props);
  
    this.state = {
        items: [],
        DataisLoaded: false
    };
}
 view = () => {
    // const location = useLocation();

    var id = document.getElementsByClassName("btn-primary").innerHTML;
    // console.log(location.pathname);
    alert(id);
  }
//   registerDiv2(el) {
//     el.addEventListener('mouseleave', () => console.log('div 2 mouse leave'));
//   }
  
//   registerDiv3(el) {
//     el.addEventListener('mouseleave', () => console.log('div 3 mouse leave'));
//     el.addEventListener('mouseenter', () => console.log('div 3 mouse enter'));
//   }
  
//   registerDiv4(el) {
//     el.addEventListener('mouseleave', () => console.log('div 4 mouse leave'));
//     el.addEventListener('mouseenter', () => console.log('div 4 mouse enter'));
//   }

componentDidMount() {
    fetch("http://localhost:3000/courses-12"
    )
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div className='d-flex justify-content-center align-items-center'>
            <h1> Pleses wait some time.... </h1> </div> ;
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


<title>{"Best Learning Platform Study Buddy - "}</title>
<link rel="canonical" href={"https://www.studybuddy.store/"} />
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
<meta property="og:url" content={"https://www.studybuddy.store/"} />



</Helmet>
         <div class="react-wrapper">
            <div class="react-wrapper-inner">
                <div class="react-breadcrumbs">
                    <div class="breadcrumbs-wrap">
                        <img class="desktop" src="assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
                        <img class="mobile" src="assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
                        <div class="breadcrumbs-inner">
                            <div class="container">
                                <div class="breadcrumbs-text">
                                    <h1 class="breadcrumbs-title">Coureses Grid</h1>
                                    <div class="back-nav">
                                        <ul>
                                            
                                            <li><a href="index.html">Home</a></li>
                                            <li>Coureses Grid</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>

                <div class="react-course-filter back__course__page_grid pb---40 pt---110">
                    <div class="container pb---70"> 
                        <div class="row align-items-center back-vertical-middle shorting__course mb-50">
                            <div class="col-md-2">
                                <div class="all__icons">                                    
                                    <div class="list__icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                                    </div>
                                    <div class="result-count">Filters</div>
                                </div>
                            </div>
                            <div class="col-md-10 text-right">
                                <select class="from-control">
                                    <option>All Categories</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                                <select class="from-control">
                                    <option>All Language</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                                <select class="from-control">
                                    <option>All Prices</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                                <select class="from-control">
                                    <option>All Skills</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <div class="row align-items-center back-vertical-middle shorting__course2 mb-50">
                            <div class="col-md-6">
                                <div class="all__icons">                                   
                                    <div class="result-count">We found 104 courses available for you</div>
                                </div>
                            </div>
                            <div class="col-md-6 text-right">                                
                                <select class="from-control">
                                    <option>Sort by: Default</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>                                                  
                        <div class="row"> 
                         {/* {  
                        items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.id }, 
                    Full_Name: { item.subject }, 
                    User_Email: { item.image } ,
                    User_Name: { item.description }, 
                    Full_Name: { item.download }, 
                    User_Email: { item.view } 
                    </ol>
                ))                        
                        } */}
                         {  
                        items.map((item) => ( 
                            <div class="single-studies col-lg-4 grid-item" key = { item.id }>
                                <div class="inner-course">
                                    <div class="case-img">
                                        <a href="#" class="cate-w"><img src="assets/images/course/beg.png" alt="Beginner" /> { item.subject }</a>
                                        <img src={`assets/images/subjects/${item.image}.jpg`} alt="Course Image"/>
                                    </div>
                                    <div class="case-content">   
                                    <div className="d-flex justify-content-between">
                                        <div className="alert alert-warning py-0 m-0">{item.class}</div>
                                        <p className='m-0'><i className="fa fa-user"></i> {item.author}</p>
                                    </div>
                                    <div className="row">

                                        <div className="col-lg-10 col-10 col-md-10"><h4 class="case-title"> <a href="coureses-single.html">{item.description}</a></h4></div>
                                              
                                        <div className="col-lg-2 col-2 col-md-2">share</div>                             
                                        </div> 
                                        <div class="text-center">
                                           <a href="#" className="me-3" onClick={this.view}  > <div className="btn btn-primary px-4" value={item.id}>View</div></a>
                                           <a href={ item.download }> <div className="btn btn-success px-4">Download</div></a>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                             ))     
                        }  
                        </div>
                        <ul class="back-pagination pt---20">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li class="back-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <GoToTop/>
    </div>
  );
}
}
export default Course;

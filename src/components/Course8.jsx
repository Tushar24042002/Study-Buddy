// import ../
import React from 'react';
import ReactPaginate from "react-paginate";
import CourseHeading from './CourseHeading'
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
function Course8() {
  const date = new Date();
  let currentTime = date.getTime();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageCount, setpageCount] = useState(0);

  let limit = 9;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `  https://my-json-server.typicode.com/tushargupta24/practice10/courses-10?_page=1&_limit=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      
      `  https://my-json-server.typicode.com/tushargupta24/practice10/courses-10?_page=${currentPage}&_limit=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };



  const lengthApi = async () => {
    const response = await fetch(
      
      "https://my-json-server.typicode.com/tushargupta24/studybuddy/courses-12"
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const apilength = await response.json();
    return apilength;
  };
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


<title>Best Learning Platform Study Buddy - Sample Paper Class 8</title>
<link rel="canonical" href="https://www.studybuddy.store/courses-8/" />
<meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

{/* <title>Best Learning Platform Study Buddy - Sample Paper Class 8</title> */}
<meta name="title" content="Best Learning Platform Study Buddy - Sample Paper Class 8" />
<meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
<meta property="og:title" content="Best Learning Platform Study Buddy - Sample Paper Class 8" />

<meta property="og:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

<meta name="twitter:title" content="Best Learning Platform Study Buddy - Sample Paper Class 8" />
<meta name="twitter:description"
  content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
<meta property="og:url" content="https://www.studybuddy.store/courses-8/" />



</Helmet>
      <CourseHeading heading="class 8th Page" subheading="Course page 8Th Class"/>
      <div className="container py-5 pt-60">
        <div className="row">

          <div class="react-course-filter back__course__page_grid ">
            <div class="">
              <div class="row align-items-center back-vertical-middle shorting__course2 mb-50">
                <div class="col-md-3">
                  <div class="all__icons">
                    <div class="result-count"><strong>total {items.length} pdfs (Check Pages)</strong> </div>
                  </div>
                </div>
                <div className="col-lg-6 ms-auto">
                  <div className=" d-flex align-items-center">
                    <div class="col-md-2">
                      <div class="d-flex">
                        <div class="list__icons me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                        </div>
                        <div class="result-count">Filters</div>
                      </div>
                    </div>
                    <div class="ms-auto col-md-10 text-right">
                <input type="text" className='form-control' placeholder='Search here' onChange={(e) => { setSearchTerm(e.target.value) }} />
              </div>
              </div>
              </div>
                  </div>
                </div>
              </div>
         
          {items.filter(val => {
            if (searchTerm === "") {
              return val;
            }
            else if (val.subject.toLowerCase().includes(searchTerm.toLowerCase()) || val.class.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((item) => {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 v my-2 p-4">
                <div className="card shadow">
                  <div className="card-body p-4">
                    <div className="img-box">
                      <img src={`assets/images/subjects/${item.image}.jpg`} alt="Course Image" />
                    </div>
                    <div className="d-flex justify-content-between pt-4 pb-2">
                      <div className="alert alert-warning py-0 m-0">{item.class} - {item.subject}</div>
                      <p className='m-0'><i className="fa fa-user"></i> {item.author}</p>
                    </div>
                    <div className="row pb-2">

                      <h4 className='mb-0 desc'> <a href="#">{item.description}</a></h4>


                    </div>
                    <div class="d-flex text-center justify-content-center align-items-center pt-1">
                      {/* <a href="#" className="me-3"> <div className="btn btn-primary px-4" value={item.id}>View</div></a> */}
                      {/* <div className="col-lg-10 col-10 col-md-10"> */}
                      <a href={item.download} download={currentTime}> <div className="btn btn-darks px-5 me-4">Download </div></a>
                      {/* </div> */}
                      <a href="#">Share <i className='fa fa-share'></i></a>
                    </div>
                  </div>
                </div>
              </div>




            );
          })}
        </div>

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
<GoToTop/>
    </div>
  );
}

export default Course8;
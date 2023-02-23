// import ../
import React from 'react';
import ReactPaginate from "react-paginate";
import CourseHeading from './CourseHeading';
import PaperText from './PaperText';
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Alert from 'react-bootstrap/Alert';
import ReactGA from 'react-ga';
import Button from 'react-bootstrap/Button';
import Cardpdf from './Cardpdf';
// import GoToTop from './GoToTop';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import { faL } from '@fortawesome/free-solid-svg-icons';
import GoToTop from './GoToTop';
function SecondarySamplePaper(props) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // const date = new Date();
  // let currentTime = date.getTime();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageCount, setpageCount] = useState(0);
  const [show, setShow] = useState(false);
  let limit = 14;
  const [isShown, setIsShown] = useState(false);
  const [date, setDate] = React.useState(new Date());




  setTimeout(() => {
    setShow(false);
    setIsShown(false);
  }, 4000);
  function handleClick() {
    setShow(true);
    setIsShown(true);
  };
  function hideAlert() {
    setIsShown(false);
    setShow(false);
  }
  //Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {



    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `  https://my-json-server.typicode.com/tushargupta24/${props.apis}?_page=1&_limit=${limit}`
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

      `  https://my-json-server.typicode.com/tushargupta24/${props.apis}?_page=${currentPage}&_limit=${limit}`
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



      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <div className="react-breadcrumbs">
            <div className="breadcrumbs-wrap">
              <img className="desktop" src="/assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
              <img className="mobile" src="/assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
              <div className="breadcrumbs-inner">
                <div className="container">
                  <div className="breadcrumbs-text">
                    <h1 className="breadcrumbs-title">{props.heading}</h1>
                    <div className="back-nav">
                      <ul>

                        <li><a href="index.html">Home</a></li>
                        <li>{props.subheading}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>




      <div className={isShown ? 'alertBar' : 'noClass'}>
        {/* <div className="col-lg-5 col-md-8 col-10 mx-auto"> */}
        <Alert variant="success" onClick={() => setShow(false)} show={show} dismissible>
          <Alert.Heading>Thank You, Visit Again!</Alert.Heading>

        </Alert>
        {/* </div> */}
      </div>
      <div className="container py-5 pt-60">
        <div className="row">

          <div className="react-course-filter back__course__page_grid ">
            <div className="">
              <div className="row align-items-center back-vertical-middle shorting__course2 mb-50">
                <div className="col-md-3">
                  <div className="all__icons">
                    <div className="result-count"><strong>total {items.length} pdfs (Check Pages)</strong> </div>
                  </div>
                </div>
                <div className="col-lg-6 ms-auto">
                  <div className=" d-flex align-items-center">
                    <div className="col-md-2 col-4">
                      <div className="d-flex">
                        <div className="list__icons me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                        </div>
                        <div className="result-count">Filters</div>
                      </div>
                    </div>
                    <div className="ms-auto col-md-10 text-righ px-0">
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
              <>
                {!show && <div className="col-lg-6 col-md-12 col-12 p-4 notes" key={item.id} >
                  {/* <a href={item.download} onClick={handleClick} download={date} >
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="description">
                            <h4>{item.description}</h4>
                          </div>
                          <a href={item.download}>
                            <div className="icon-box" data-toggle="tooltip" data-placement="top" title="Download The File">
                              <img src="assets/images/academic/pdf.png" alt="" width="100%" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a> */}
                  <Cardpdf downloadlink={item.download} downloaddate={date} itemdesc={item.description} />

                </div>}
              </>



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
      <PaperText />
      <GoToTop />
    </div>
  );
}

export default SecondarySamplePaper;
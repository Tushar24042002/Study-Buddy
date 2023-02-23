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
function Latest(props) {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageCount, setpageCount] = useState(0);

    let limit = 8;
    const [date, setDate] = React.useState(new Date());

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
                `   https://my-json-server.typicode.com/tushargupta24/physics-py-12/physics-qp-12?_page=1&_limit=${limit}`
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

            `  https://my-json-server.typicode.com/tushargupta24/latest/latest-course?_page=${currentPage}&_limit=${limit}`
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

            " https://my-json-server.typicode.com/tushargupta24/latest/latest-course"
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


<title>{"Best Learning Platform Study Buddy - " + (props.class ? props.class : "Online Education Hub")}</title>
<link rel="canonical" href={"https://www.studybuddy.store/" + (props.class ? props.class : "Online Education Hub")} />
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
<meta property="og:url" content={"https://www.studybuddy.store/" +(props.class ? props.class : "Online Education Hub")} />



</Helmet>
            <div className="events-section pt---100 pb---100">
                <div className="container">
                    <div className="events-section-title">
                        <h1 class="events-title">Latest Papers</h1>
                        <span class="events-view-all"><a href="/py-ques">View all Papers</a> <i
                            class="fas fa-chevron-right"></i></span>
                    </div>
                    <div className="events-inner">
                        {items.map((item) => {
                            return (


                                <div className="event-item" key={item.id}>
                                    <div className="date">
                                        <span class="day">{item.class}</span>
                                        <span class="date-span">{item.subject}</span>
                                    </div>
                                    <div className="event-info">
                                        <div className="event-title">{item.description}</div>
                                        {/* <div className="event-location">Open University, NY USA</div> */}
                                    </div>
                                    <button class="event-btn"><a href={item.download} download={date}>Download</a></button>
                                </div>


                            );
                        })}
                    </div>

                </div>
            </div>
            <GoToTop />
        </div>
    );
}

export default Latest;
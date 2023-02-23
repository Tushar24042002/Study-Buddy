import React from 'react'

export default function CourseHeading(props) {
    return (
        <div>
            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    <div class="react-breadcrumbs">
                        <div class="breadcrumbs-wrap">
                            <img class="desktop" src="/assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
                            <img class="mobile" src="/assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
                            <div class="breadcrumbs-inner">
                                <div class="container">
                                    <div class="breadcrumbs-text">
                                        <h1 class="breadcrumbs-title">{props.heading}</h1>
                                        <div class="back-nav">
                                            <ul>

                                                <li><a href="/">Home</a></li>
                                                <li>{props.subheading}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="react-course-filter back__course__page_grid ">
                        <div class="container">
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
                        </div>
                    </div> */}
                    </div>
                    </div>
                    </div>
                    )
}

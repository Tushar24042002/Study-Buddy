import React from 'react';
import CourseHeading from './CourseHeading';
import GoToTop from './GoToTop'

export default function Constructions(props) {
    return (<div>
        <CourseHeading heading={props.heading} subheading={props.subheading} />
        <section id='construction'>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                <div className="image-box">
                                    <img src="assets/images/settings.png" alt=" Site under Construction" width="100%" />
                                </div>
                                <div className="text">
                                    <h2>404 : Page under Construction</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <GoToTop/>
    </div>
    )
}

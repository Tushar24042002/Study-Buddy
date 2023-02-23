import React from 'react';
// import { useState } from 'react';
import CourseHeading from './CourseHeading';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';
import GoToTop from './GoToTop';
// import ContactForm from './ContactForm';
export default function ContactForm() {
    const [state, handleSubmit] = useForm("xlevzplg");
    if (state.succeeded) {
        return (
            <div className="col-lg-6 mx-auto mt-5">
                <div className="align-items-center">
                    <div text-center><p>Thanks for joining!</p>
                        <a href="/contact"><div className="btn btn-primary">Back to contact page</div></a>

                    </div>
                </div>
            </div>
        );
    }
  return (
    <div className="row">
    <div className="col-lg-6 mx-auto px-0">
        <div className="card shadow mt-5 p-40">
            <div className="card-body">
                <h1 class="events-title text-center fw-bold">Contact us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-12 my-2">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' name='username' className='form-control' />
                        <ValidationError
                            prefix="username"
                            field="username"
                            errors={state.errors}
                        />
                    </div>
                    <div className="col-lg-12 my-2">
                        <label htmlFor="email">email</label>
                        <input type="email" id='email' name='email' className='form-control' />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="col-lg-12 my-2">
                        <label htmlFor="phone">phone</label>
                        <input type="number" id='phone' name='phone' className='form-control' />
                        <ValidationError
                            prefix="phone"
                            field="phone"
                            errors={state.errors}
                        />
                    </div>
                    <div className="col-lg-12 my-2">
                        <label htmlFor="message">message</label><br />
                        <textarea class="textinput" placeholder="Message"></textarea>
                        <ValidationError
                            prefix="message"
                            field="message"
                            errors={state.errors}
                        />
                        {/* <input type="message" id='message' name='message' className='form-control h-100' /> */}
                    </div>
                    <div className="col-lg-12 my-4">
                        <button type="submit" disabled={state.submitting} className="btn btn-primary w-100">
                            Submit
                        </button>
                        {/* <button type='submit' className="btn btn-primary w-100">Submit</button> */}
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
  )
}

// export default ContactForm
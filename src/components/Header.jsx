import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/style2.scss';


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>Syllabus</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Question papers</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
};


function Header() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div id='sticky-header'>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className='logo-width'>
            <img src="assets/images/studybuddylogo.png" alt="Study Buddy Logo" width="100%" />
            </div>
       
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/notes"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/syllabus"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Syllabus
              </NavLink>
            </li>
          
            <li className="nav-item">
              <NavLink
                exact
                to="/ncert-solutions"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                NCERT Solution
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/quespaper"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Sample paper
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/py-ques"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Previous Paper
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/portfolio-page"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
              {/* <div className="ul">
                <ul>
                  <li>Home</li>
                </ul>
              </div> */}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
export default Header;
            {/* <!--================= Header Section End Here =================--> */}

//         </div>
//     )
// }

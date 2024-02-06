import React from "react";
import profile from '../Assets/profileicon.jpg';
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import '../Styles/Home.css';

const Home = () => {
  return (
    <>
    <Navbar />
      <div id="home" className="container">
        <div className="home-flex d-flex row">
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="col-lg-6 col-md-12 col-sm-12 img"
          >
            <img className="avathar-img" src={profile} alt="avathar" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content">
            <h1 className="home-head">
              <TypeAnimation
                sequence={[
                  `Hi 👋 i'm a \n web Developer`,
                  1000,
                  "",
                ]}
                speed={40}
                style={{
                  whiteSpace: "pre-line",
                }}
                repeat={Infinity}
              />
            </h1>
            <p className="aboutme">Highly motivated and skilled engineering college student seeking a challenging position as a FrontEnd
Developer and to leverage my technical knowledge, creativity, and problem-solving abilities to
contribute to the success of an organization. Eager to apply my skills in HTML, CSS, React.JS develop
user-friendly and visually appealing web applications.</p>
            <div>
              <button className="btn btn-secondary cv-btn">Download CV</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;

import React from "react";
import profile from '../Assets/profileicon.jpg';
import Navbar from "./Navbar";
import '../Styles/Home.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
    <Navbar />
  <div className="home container">
    <div className="home-flex d-flex  justify-content-evenly row">

      <div className="col-lg-6 col-md-12 col-sm-12 avatar">
        <img className="avathar-img" 
          data-aos="zoom-in"
          data-aos-duration="1000"
           src={profile} alt="avathar" 
        />
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 content">
        {/* <h1 className="home-heading" data-aos="zoom-in" data-aos-duration="1000">
          I'm a Thilagavathi  <br /> I build a Responsive Websites. 
        </h1> */}

<TypeAnimation
      sequence={[
        'Im Thilagavathi Chandrasekar I build a responsive websites', 
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />

            <p 
              className="home-about-content" 
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              >
            "Passionate frontend developer with a flair for crafting engaging user experiences. Proficient in HTML, CSS, Bootstrap and React js. Committed to creating clean, responsive designs."
            </p>

            <div>
              <button className="btn  cv-btn">Resume</button>
            </div>
      </div>

    </div>
  </div>
      
    </>
  );
};

export default Home;

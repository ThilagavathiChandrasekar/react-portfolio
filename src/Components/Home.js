import React from "react";
import profile from '../Assets/profileicon.jpg';
import '../Styles/Home.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
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
{/* <TypeAnimation
      sequence={[
        'Im Thilagavathi Chandrasekar I build a responsive websites', 
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    /> */}
    <h3 data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="home-head">
        I`m Thilagavathi Chandrasekar I build a responsive websites.
    </h3>

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

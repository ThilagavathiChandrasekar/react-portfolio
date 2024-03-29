import React from "react";
import profile1 from "../Assets/my-img.jpg";
import resumeFile from "../Assets/resume.pdf";
import "../Styles/Home.css";
const Home = () => {
  return (
    <>
      <div className="home container" id="home">
        <div className="home-flex d-flex  justify-content-evenly row">
          <div className="col-lg-6 col-md-12 col-sm-12 avatar">
            <img
              className="avathar-img"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={profile1}
              alt="avathar"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 content">
            <h3
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className="home-head"
            >
              Hi <br />
              I'm{" "}
              <span className="head-span-blue">
                Thilagavathi Chandrasekar
              </span>{" "}
              <br /> I build a responsive websites.
            </h3>

            <p
              className="home-about-content"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="-100"
              data-aos-anchor-placement="top-center"
            >
              Passionate frontend developer with a flair for crafting engaging
              user experiences. Proficient in HTML, CSS, Bootstrap and React js.
              Committed to creating clean, responsive designs.
            </p>

            <div>
              <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                <button className="btn  cv-btn">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

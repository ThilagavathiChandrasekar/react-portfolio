import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { IoSettingsOutline } from "react-icons/io5";
import "../Styles/Skillls.css";
// images
import skill from "../Assets/Skills.png";
//icons
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";

export default function Skills() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}

      <div id="skill">
        <h4
          className="skill-heading"
          data-aos="zoom-in-"
          data-aos-duration="1500"
        >
          <IoSettingsOutline />
          Mastery
        </h4>

        <p className="skill-para">
          I have a vast experience in the following web technologies:
        </p>
        <div className="skill-content  d-flex justify-content-around">
          <div className="skillset">
            <div className="skill-list  ">
              <div
                className="icons"
                data-aos="zoom-in-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
              >
                <FaHtml5 id="html" style={{ color: "#E34F26" }} />
                <p className="skill-list-name">HTML</p>
              </div>
              <div
                className="icons"
                data-aos="zoom-in-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
              >
                <FaCss3 id="css" style={{ color: "#1572B6" }} />
                <p className="skill-list-name">CSS</p>
              </div>
              <div
                className="icons"
                data-aos="zoom-in-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
              >
                <FaBootstrap id="bootstrap" style={{ color: "#563d7c" }} />
                <p className="skill-list-name">Bootstrap</p>
              </div>
              <div
                className="icons"
                data-aos="zoom-in-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
              >
                <FaReact id="react" style={{ color: "skyblue" }} />
                <p className="skill-list-name">React Js</p>
              </div>
              <div
                className="icons"
                data-aos="zoom-in-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
              >
                <FaJava id="java" style={{ color: "#f89820" }} />
                <p className="skill-list-name">Java</p>
              </div>
              <div
                className="icons"
                data-aos="zoom-in-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
              >
                <FaGithub id="github" style={{ color: "black" }} />
                <p className="skill-list-name"> Github</p>
              </div>
            </div>
          </div>
          <div className="img-skills">
            <img
              src={skill}
              className="skill-img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

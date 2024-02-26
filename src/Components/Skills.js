import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { IoSettingsOutline } from "react-icons/io5";
import '../Styles/Skillls.css';
// images
import skill from '../Assets/Skills.png'
//icons
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJava, FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div>
    {/* <Navbar /> */}
    {/* <Home /> */}

      <div className='skill'>
        <h4 className='skill-heading'  data-aos="zoom-in-"  data-aos-easing="linear" data-aos-duration="1000"><IoSettingsOutline />Mastery</h4>

       <div className='skill-content  d-flex justify-content-around'>
            <div className='skillset'>    
              <p className='skill-para'>I have a vast experience in the following web technologies:</p>

              <div className='skill-list d-flex col-sm-6'>
                <div className='icons'>
                  <FaHtml5 data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      className='html' style={{color: "#E34F26", textAlign:"center"}} />
                      <p className='skill-list-name'>HTML</p>
                  </div>
                <div className='icons'>
                  <FaCss3 data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      className='css' style={{color: "#1572B6"}} />
                      <p className='skill-list-name' >CSS</p></div>
                <div className='icons'>
                  <FaBootstrap data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      className='bootstrap' style={{ color:"#563d7c"}} />
                      <p className='skill-list-name'>Bootstrap</p></div>
                <div className='icons'>
                  <FaReact data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      className='react' style={{color: "skyblue" }}/>
                      <p className='skill-list-name'>React Js</p>
                  </div>
                <div className='icons'>
                  <FaJava data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      className='java' style={{color: "#f89820"}} />
                      <p className='skill-list-name'>Java</p>
                  </div>
                <div className='icons'>
                  <FaGithub data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      className='github' style={{color: "black"}}/>
                      <p className='skill-list-name'> Github</p>
                  </div>
              </div>
            </div>
            <img src={skill} className='skill-img' data-aos="flip-right"/>
       </div>

      </div>
    </div>
  )
}

import React from 'react';
import '../Styles/Contact.css';
// import Project from '../Components/Project';
import Contactimg from '../Assets/Contact.png';
import { IoIosSend } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
function Contact() {
  return (
    <div className='contact'>
        {/* <Project /> */}
        <h4 data-aos="zoom-in"  data-aos-easing="linear" data-aos-duration="1000"><FcContacts />Contact</h4>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img src={Contactimg} className='contact-img' data-aos="flip-left" />
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div>
                        <form data-aos="zoom-in-up"  data-aos-easing="linear" data-aos-duration="1000">
                        <input type='email' placeholder='Enter email address' className='email'  /><br />
                         <input type='message' placeholder='Enter  message...' className='msg' /><br />
                            <button className='btn'>Send message<IoIosSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
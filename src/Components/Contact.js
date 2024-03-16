import React from 'react';
import '../Styles/Contact.css';
import Contactimg from '../Assets/Contact.png';
import { IoIosSend } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6du33xi', 'template_e08tl2g', e.target, 'RgmrtbAiPTnY0l4XY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact'>
        <h4 className='contact-head'><FcContacts />Contact</h4>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12' data-aos="zoom-in-right" >
                    <img src={Contactimg} className='contact-img' />
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div>
                        <form onSubmit={sendEmail} data-aos="zoom-in-left">
                            <input type='name' name='user_name' placeholder='Enter User Name' className='name' /><br />
                            <input type='email' name='user_email' placeholder='Enter email address' className='email' /><br />
                            <textarea name='message' placeholder='Enter message...' className='msg' /><br />
                            <button type='submit' className='btn'>Send message<IoIosSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;

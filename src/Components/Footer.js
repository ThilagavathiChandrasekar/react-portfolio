import React from 'react';
import '../Styles/Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
  
function Footer() {
  const linkedinUrl = 'https://in.linkedin.com/in/thilagavathi-chandrasekar-663559283';
  const handleLinkedinButtonClick = () => {
    window.open(linkedinUrl, '_blank');
  };
  const handleEmailButtonClick = () => {
    window.location.href = "mailto:cthilagavathi2003@gmail.com";
  };
  return (
    <div >
          <div class="card footer container-fluid ">
              <div class="card-body footer-body ">
                <div className='footer-right'>
                  <p className='card-text'>My social media links:</p>
                  <p className='social-icon card-text'>
                    <FaLinkedin className='linkedin'  onClick={handleLinkedinButtonClick} />
                    <MdEmail className='mail'  onClick={handleEmailButtonClick} />
                  </p>
                </div>

                <div className='footer-left'>
                <p style={{ textAlign: 'center' }} className='footer-left-text' >More project i've worked on</p>
                <p className='github-footer'><a href="https://github.com/ThilagavathiChandrasekar"><FaGithub className='git-icon'/><span className='git'>@Thilagavathi Chandrasekar</span> on github</a></p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Footer
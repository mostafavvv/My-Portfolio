import React from 'react'
import {FaLinkedinIn,FaGithubAlt,FaFacebookF} from "react-icons/fa"
import "./footer.css"
const Footer = () => {
  return (
    <div id='footer'>
      
      <div className="container">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/mostafa-mahmoud-mohamed-260158209/"><FaLinkedinIn /></a></li>
            <li><a href="https://github.com/mostafavvv?tab=repositories"><FaGithubAlt /></a></li>
            <li><a href="https://www.facebook.com/mostafa.benmahmoud.73"><FaFacebookF /></a></li>
            
          </ul>
        
      </div>
    </div>
  )
}

export default Footer

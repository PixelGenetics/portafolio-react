import React from 'react'
import './styles/Footer.css'
import linkdin from '../../assets/linkedin-svgrepo-com.svg'
import github from '../../assets/github-142-svgrepo-com.svg'
import mail from '../../assets/mail-svgrepo-com.svg'


const Footer = () => {
  return (
    <div id='footer_container'>
        <ul id='footer'>
          <li><img id='img_footer' src={linkdin} alt="linkdin" /></li>
          <li><img id='img_footer' src={github} alt="linkdin" /></li>
          <li><img id='img_footer' src={mail} alt="linkdin" /></li>
        </ul>
    </div>
  )
}

export default Footer

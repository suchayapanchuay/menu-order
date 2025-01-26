import React from 'react'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import './css/Contact.css'
const Contact = () => {
  return (
  <div className='app_contact section_padding' id='contact'>
    <div className='app_contact-link'>
      <div className='app_contact-link-contect'>
        <h1 className='app_contact-headtext'>Contact Us</h1>
        <p className='open'>9 W 53rd St,New York,NY 10019,USA</p>
        <p className='open'>+1 321-445-2345</p>
        <p className='open'>+1 346-556-9876</p>
      </div>
      <div className='app_contact-link-logo'>
        <h1>Medium Cafe</h1>
        <p className='open'>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className='app_contact-link-icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app_contact-link-work'>
        <h1 className='app_contact-headtext'>Working Hours</h1>
        <p className='open'>Monday-Friday</p>
        <p className='open'>8:00 am - 9:00 pm</p>
        <p className='open'>Saturday-Sunday</p>
        <p className='open'>9:00 am - 10:00 pm</p>
      </div>
    </div>
  </div>
  )
}

export default Contact

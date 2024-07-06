import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-element'>copyright &copy; &nbsp;
       { (new Date().getFullYear())}
      </p>
    </div>
  )
}

export default Footer

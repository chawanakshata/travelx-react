import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
  <div class="contact-info">
    <h3>Contact Information :</h3>
    <p>Email: travelx@gmail.com</p>
    <p>Phone: 9876543210</p>
    <p>Address: Andheri, Maharashtra</p>
  </div>
  <div class="follow-us">
    <h3>Follow Us :</h3>
    <ul>
      <li><a href="https://www.facebook.com/example"><i class='bx bxl-facebook-circle'></i></a></li>
      <li><a href="https://www.instagram.com/example"><i class='bx bxl-instagram' ></i></a></li>
      <li><a href="https://www.twitter.com/example"><i class='bx bxl-twitter'></i></a></li>
    </ul>
  </div>
</footer>
    </>
  )
}

export default Footer

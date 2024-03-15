import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="navbar">
  <a href="#" className="navbar-brand">Travel<span>X</span></a>
  <div className="navbar-links">
  <a href="#destinations">Home</a>
    <a href="#destinations">Destinations</a>
    <a href="#contact">Contact</a>
  </div>
</div>
  )}

export default Header


import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactForm from './assets/Components/ContactForm'
import Header from './assets/Components/Header'
import HeroSection from './assets/Components/HeroSection'
import DestinationSection from './assets/Components/DestinationSection'
import Footer from './assets/Components/Footer'
import './App.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
     {/* <Header/> */}

     <Route path='/' element= {<HeroSection/>}/>
     {/* <ContactForm/> */}
     {/* <DestinationSection/> */}
     <Route path='/destination' element= {<DestinationSection/>}/>
     {/* <Footer/> */}
     </Routes>
     </BrowserRouter>

    </>

   
  )
}

export default App
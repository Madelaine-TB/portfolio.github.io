import { useState } from 'react';
import React from 'react';
import Fade from 'react-reveal/Fade';


import Modal from './modal'

import './App.css';






function Home() {
  // const [show, setShow]=useState(false)
  const [isOpen, setIsOpen]=useState(false)

  

  return (
    <div className="App" id='Home'>
       
      <div className='nav'>
          <a href='#' className='navBtn'>Home</a>
          <a href='#'className='navBtn' >About</a>
          <a  href='#' className='navBtn'>Skills</a>
          <a href='#'  className='navBtn'>Contact</a>
      </div>
        <h1>
          Hi,<br />
          Hey There,<br/>
          Hello!
        </h1>

      <Fade right>
          <p className='subText'>
          Hello, my name is Madelaine Trujillo, pronounced Mad-deh-lynn True-he-yo and I use she/her/hers pronouns. _Usually_ I go by Maddie but I honestly have no preference and am always open to some new cool nicknames.
          </p>
      </Fade>


     
      <button onClick={()=>setIsOpen(!isOpen)} className="modalBtn">❖</button>
<Modal show={isOpen} onClose={()=>setIsOpen(!isOpen)}/>
    </div>
  );
}

export default Home;

import { useState } from 'react';
import React from 'react';
import Fade from 'react-reveal/Fade';

import Nav from '../../components/Nav/nav-menu'
import Modal from '../../components/Modal/modal'

import './Intro.css';



function Home() {
  // const [show, setShow]=useState(false)
  const [isOpen, setIsOpen]=useState(false)

  

  return (
    <div className="Intro" id='IntroSection'>
      <div className='nav-container'>
      <Nav />
      </div>
     

        <h1>
          Hi,<br />
          Hey There,<br/>
          Hello!
        </h1>

      <Fade right>
          <p className='subText'>
          Hello, my name is Madelaine Trujillo, pronounced Mad-deh-lynn True-he-yo and I use she/her/hers pronouns. Usually I go by Maddie but I honestly have no preference and am always open to some new cool nicknames.
          </p>
      </Fade>


     
      <button onClick={()=>setIsOpen(!isOpen)} className="modalBtn">❖</button>
<Modal show={isOpen} onClose={()=>setIsOpen(!isOpen)}/>
    </div>
  );
}

export default Home;

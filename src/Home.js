import { useState } from 'react';
import React from 'react';
// import Fade from 'react-reveal/Fade';


import Modal from './modal'

import './App.css';






function Home() {
  // const [show, setShow]=useState(false)
  const [isOpen, setIsOpen]=useState(false)

  

  return (
    <div className="App" id='Home'>
       
      <div className='nav'>
          <a href='#Home' className='navBtn'>Home</a>
          <a href='#Page2'className='navBtn' >About</a>
          <a className='navBtn'>Skills</a>
          <a className='navBtn'>Contact</a>
      </div>
      {/* <Fade top> */}
        <h1>
          Hi,<br />
          Hey There,<br/>
          Hello!
        </h1>
        {/* </Fade> */}


     
      <button onClick={()=>setIsOpen(!isOpen)} className="modalBtn">❖</button>
<Modal show={isOpen} onClose={()=>setIsOpen(!isOpen)}/>
    </div>
  );
}

export default Home;

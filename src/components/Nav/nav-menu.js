import { useState, useRef } from 'react';
import React from 'react';

import styled from 'styled-components'
import './nav-menu.css';



function Nav() {

    const [indicatorPosition, setIndicatorPosition] = useState();
    const [indicatorWidth, setIndicatorWidth] = useState();
    const navElement = useRef();



    const handleClick = (event) => {
        const linkLeft = event.target.getBoundingClientRect().left;
        const navLeft = navElement.current.getBoundingClientRect().left;
        const linkWidth = event.target.getBoundingClientRect().width;
        const singleLinkWidth = linkWidth;
        const singleLinkLeft = linkLeft - navLeft;
      
        setIndicatorPosition(singleLinkLeft);
        setIndicatorWidth(singleLinkWidth);
      };
  

  return (
      <nav className='navigation'>
      <ul className='menu'>
       <li> <a onClick={handleClick} href="#IntroSection" className='menuItem'>Home</a></li>
       <li> <a onClick={handleClick} href="#AboutSection" className='menuItem'>About</a></li>
       <li> <a onClick={handleClick} href="#SkillsSection" className='menuItem'>Skills</a></li>
       <li> <a onClick={handleClick} href="" className='menuItem'>Contact</a></li>
        </ul>
    </nav>

  );
}

export default Nav;

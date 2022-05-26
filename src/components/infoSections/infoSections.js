import React from 'react';
import './infoSections.css';

import backgroundOne from '../../Images/bgWaves.png';
import backgroundTwo from '../../Images/bgClouds.png'




function InfoSections() {
  
    const sections = [
        {
            title: "self.",
            content: "Born and raised in sunny Southern California in the mid 90’s during Taurus season. A proud, self proclaimed gym enthusiast working to lift as many heavy things as possible. One half of a beautiful queer relationship with my amazing partner/bestfriend.",
            backgroundImg: backgroundOne,
            color:""
        },
        {
            title: "life before code.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            backgroundImg: backgroundTwo,
            color: ""
            
        },
        {
            title: "career in tech.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "#B8858C"
        },
        {
            title: "future intentions.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "#97A9BC"
        }
    ]

  return (
    <div className="InfoSections" id="InfoSections" >
              {sections.map((section, index) =>
            <div key={section.title + index} className="section" style={{backgroundColor:(`${section.color}`), backgroundImage:"url(" + `${section.backgroundImg}` + ")"}}>
                <h1 className='title'>{section.title} </h1>
                <p className='content'>{section.content}</p>
            </div>
            )}
    
    </div>
  );
}

export default InfoSections;
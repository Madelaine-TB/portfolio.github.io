import React from "react";
import './About.css';

import InfoSections from "../../components/infoSections/infoSections"
import portrait from "../../Images/Madelaine_Trujillo-17.jpeg"
import portraitHover from "../../Images/CrewPage_Madelaine_Trujillo.jpeg"



function About() {

  return (
    <div className="About" id="AboutSection" >
      <h1 className='aboutTitle'>About</h1>
<div className="aboutIntro">
  <p className="introDesc">Currently located
    3 years experience agency tech team
    A bit more info
    lead into next section
  </p>
<img  className="aboutIntroImg"  src={portrait}
  />

</div>

<InfoSections />


    </div>
  );
}

export default About;

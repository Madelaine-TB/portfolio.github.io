import React from 'react';
import './codeSkills.css';
import Fade from 'react-reveal/Fade';




function CodeSkills() {
  

  return (
    <div className="codeSkills" id="codeSkills" >
        <div className='chart'>
<Fade bottom>    <div className='css'>
                <span>CSS</span>
            </div></Fade>
        
            <div />
            <div className='html'>HTML</div>
            <div />
            <div className='js'>JavaScript</div>
            <div />
            <div className='react'>React</div>
        </div>
    </div>
  );
}

export default CodeSkills;
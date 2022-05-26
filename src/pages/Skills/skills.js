

   import React from "react";
   import './skills.css';

   import CodeSkills from "../../components/codeSkills/codeSkills"
   
  
   
   
   
   function Skills() {
   
     return (
       <div className="Skills" id="SkillsSection" >
         <h1 className='skillsTitle'>Skills</h1>
   <div style={{paddingTop:"25vh"}}>
   <CodeSkills />
   
   </div>
   
       </div>
     );
   }
   
   export default Skills;
   
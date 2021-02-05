import React from 'react';
import social from './../assets/Social.png'
import economic from './../assets/economic.png'
import infrastructure from './../assets/infrastructure.png'
import security from './../assets/security.png'

const SectionsNavbar = (props) => {
  const liClass = props.style
    ? "section-element sector"
    : "section-element";

  const imgClass = props.style
    ? "section-navbar-image"
    : "section-navbar-image members"
  
  switch(props.section.value) {
      case "social":
        console.log("social")
        return ( 
          <li className={liClass}>
            <img className={imgClass} src={social} />
            {props.section.label}
          </li>    
        );
      case "economic":
        console.log("economic")
        return ( 
          <li className={liClass}>
            <img className={imgClass} src={economic} />
            {props.section.label}
          </li>    
        );
      case "infrastructure":
        return ( 
          <li className={liClass}>
            <img className={imgClass} src={infrastructure} />
            {props.section.label}
          </li>    
        );

      case "security":
        return ( 
          <li className={liClass}>
            <img className={imgClass} src={security} />
            {props.section.label}
          </li>    
        );
    }
  

}
 
export default SectionsNavbar;
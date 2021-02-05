import React from 'react';
import publicServices from './../assets/public-services.png';
// import policyMaking from './../assets/policy-making.png';
// import community from './../assets/community.png';
// import health from './../assets/health.png';
// import culture from './../assets/culture.png';
// import sports from './../assets/sports.png';
// import education from './../assets/education.png';
// import thirdSector from './../assets/third-sector.png';
// import business from './../assets/business.png';
// import tourism from './../assets/education.png';
// import manufacturing from './../assets/manufacturing.png';
// import media from './../assets/media.png';
// import ai from './../assets/ai.png';
// import macroeconomics from './../assets/macroeconomics.png';
// import sustainability from './../assets/sustainability.png';
// import energy from './../assets/energy.png';
// import environment from './../assets/environment.png';
// import diplomacy from './../assets/diplomacy.png';
// import defense from './../assets/defense.png';
// import food from './../assets/food.png';

const SectorSection = (props) => {
  // const icons = Object.freeze({publicServices, policyMaking, community, health, culture, sports, education
  // , thirdSector, business, tourism, manufacturing, media, ai, macroeconomics, sustainability, energy
  // , environment, diplomacy, defense, food});

  return ( 
    <div className="sector-section">
      {props.roles
        .filter(role => role.section === props.section.value)
        .map(role => 
          <div
            key={role.role}
            className="role"
          >
            <img src={publicServices}/>
            <span className="role-name">{role.role}</span>
          </div>
        )
      }
    </div>
  );
}
 
export default SectorSection;
import React, { Component } from 'react';
import Navbar from './components/navbar';
import NavbarBlack from './components/navbarBlack';
import MeetMembers from './components/meetMembers';
import Sectors from './components/sectors';
import SectionOne from './components/sectionOne';

// import publicServices from './../assets/public-services.png';
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

class App extends Component {
  state = { 
    sections: [
      {label: 'social development', value: 'social'},
      {label: 'economic development', value: 'economic'},
      {label: 'infrastructure & environment', value: 'infrastructure'},
      {label: 'security & international affairs', value: 'security'},
    ],
    roles: [
      {section: 'social', role: 'Public Services Administration', label:'publicServices', label:'publicServices'},
      {section: 'social', role: 'Policy Making', label:'policyMaking'},
      {section: 'social', role: 'Community & social services', label:'community'},
      {section: 'social', role: 'health & wellbeing', label:'health'},
      {section: 'social', role: 'culture', label:'culture'},
      {section: 'social', role: 'sports', label:'sports'},
      {section: 'social', role: 'education', label:'education'},
      {section: 'social', role: 'community development', label:'community'},
      {section: 'social', role: 'third sector', label:'thirdSector'},
      {section: 'economic', role: 'business & financial services', label:'business'},
      {section: 'economic', role: 'tourism, retails & leisure', label:'tourism'},
      {section: 'economic', role: 'advanced manufacturing', label:'manufacturing'},
      {section: 'economic', role: 'media & creative industries', label:'media'},
      {section: 'economic', role: 'research & development', label:'research'},
      {section: 'economic', role: 'advanced science & research', label:'research'},
      {section: 'economic', role: 'AI & robotics', label:'ai'},
      {section: 'economic', role: 'macroeconomics', label:'macroeconomics'},
      {section: 'infrastructure', role: 'sustainability & renewables', label:'sustainability'},
      {section: 'infrastructure', role: 'energy & economy', label:'energy'},
      {section: 'infrastructure', role: 'environment', label:'environment'},
      {section: 'infrastructure', role: 'space', label:'environment'},
      {section: 'security', role: 'diplomacy & internationnal affairs', label:'diplomacy'},
      {section: 'security', role: 'security & defense affairs', label:'defense'},
      {section: 'security', role: 'food & water security', label:'food'},
      {section: 'security', role: 'humantarian aid & philanthropy', label:'diplomacy'},
    ],
    mentors: [
      {id:1, name: 'Tarek', section: 'social',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Policy Making', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'},
      {id:2, name: 'Rana', section: 'social',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Public Services Administration', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=333&q=80'},
      {id:3, name: 'Chaza', section: 'economic',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Business & Financial Services ', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'},
      {id:4, name: 'Rola', section: 'economic',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Tourism, Retail & Leisure', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
      {id:5, name: 'Mohammad', section: 'economic',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Advanced Manufacturing', image: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
      {id:6, name: 'Rany', section: 'infrastructure',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Sustainability & Renewables', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
      {id:7, name: 'Sara', section: 'infrastructure',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Energy & Economy', image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=333&q=80'},
      {id:8, name: 'Christelle', section: 'security',description: '  |  Minister of State for Happiness and Wellbeing ', role: 'Diplomacy & International Affairs', image: 'https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80'},
    ],
    participants: [
      {id:1, name: 'Chris', section: 'social',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Public Services Administration', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
      {id:2, name: 'Mike', section: 'social',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Policy Making', image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=402&q=80'},
      {id:3, name: 'Yara', section: 'economic',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Business & Financial Services ', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80'},
      {id:4, name: 'Lea', section: 'economic',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Tourism, Retail & Leisure', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
      {id:5, name: 'Joy', section: 'economic',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Advanced Manufacturing', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
      {id:6, name: 'Mariam', section: 'infrastructure',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Sustainability & Renewables', image: 'https://images.unsplash.com/photo-1607664101908-c2b608c2653b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80'},
      {id:7, name: 'Sam', section: 'infrastructure',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Energy & Economy', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=335&q=80'},
      {id:8, name: 'Will', section: 'security',description: '  |  Minister of State for Happiness and Wellbeing ',  role: 'Diplomacy & International Affairs', image: 'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
    ],
  };

  render() { 
    const {roles} = this.state;
    const {sections} = this.state;
    const {mentors} = this.state;
    const {participants} = this.state;

    return ( 
      <React.Fragment>
        <NavbarBlack />
        <Navbar />  
        <main className="container">
          <SectionOne />
          <Sectors
            roles={roles}
            sections={sections}
          />
          <MeetMembers
            sections={sections}
            mentors={mentors}
            participants={participants}
          />
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;
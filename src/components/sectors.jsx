import React from 'react';
import Navbar from './navbar';
import SectionsNavbar from './sectionsNavbar';
import './../css/sectors.css'
import SectorSection from './sectorSection';

const Sectors = (props) => {
	// console.log(props)
	return (
		<section>
			<nav className="navbar navbar-light sector">
				<div className="sector-navbar">
					<div className="bleu-box" style={{backgroundColor:"#12a5b5", height:49, width:13}}></div>
					<span className="vital-sectors">25 vital sectors</span>
				</div>
				<div></div>
				<div></div>
				<div className="sector-navbar">
					<span className="new-sector">new sector</span>
					<div className="red-box" style={{width: 34, height: 38, backgroundColor: "#f05b40"}}></div>
				</div>
			</nav>
			<div className="sector-container">
				<ul className="sections-list sectors">
					{props.sections.map(section => 
						<SectionsNavbar
							key={section.value}
							section={section}
							style={true}
						/>
					)}
				</ul>
				<div className="sectors-sections">
					{props.sections.map(section => 
						<SectorSection
						key={section.value}
						roles={props.roles}
						section={section}
						/>
						)}
				</div>
			</div>
		</section> 
	);
}
 
export default Sectors;
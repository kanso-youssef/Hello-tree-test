import React from 'react';
import './../css/sectionOne.css'
import image1 from './../assets/sectionOneBk.png';
import image2 from './../assets/Group 868.png';
import image3 from './../assets/Group 903.png';


const SectionOne = () => {
    return ( 
        <section className="sectionOne">
            <div className="sectionOne__paragraphs">
                <p className="sectionOne__title">
                    Nep 2.0: Edition 2020
                </p>
                <p className="sectionOne__paragraph">
                    The 2020 edition of NEP is a 9-month program designed to develop Emirati 
                    technical leaders who will shape the future of 25 industry sectors 
                    critical to the UAE. 
                </p>
                <p className="sectionOne__paragraph">
                    Built with agility, health, and safety in mind, the hybrid program 
                    will include both online and onsite sessions based on the latest 
                    in learning strategy, mentoring by UAE sector leaders, immersive 
                    learning experiences, sector-specific learning, and an individual 
                    Capstone Project addressing a major challenge in each sector. 
                </p>
            </div>
            <div className="sectionOne__images">
                <img className="background-image" src={image1} />
                <img className="second-background" src={image2} />
                <img className="main-image" src={image3} />
            </div>
        </section>
     );
}
 
export default SectionOne;
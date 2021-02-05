import React, { Component } from 'react';
import SectionContainer from './sectionContainer';

class members extends Component {
  render() { 
    // console.log(this.props.memberDetailsHeight)
    // console.log(this.props.memberPosition)
    return ( 
      <div className="members-container">
        {this.props.sections.map((section, index) => {
          const mentors = this.props.mentors
            .filter(mentor => mentor.section === section.value);
          const participants = this.props.participants
            .filter(participant => participant.section === section.value);
          const members = this.props.role === 'mentors' ? mentors : participants; 
          const subMembers = this.props.role === 'mentors' ? participants : mentors ;

          return (
            <SectionContainer 
              key={section.label}
              role={this.props.role}
              subMembers={subMembers}
              members={members}
              onDisplay={this.props.handleDisplay}
              onMeet={this.props.onMeet}
              member={this.props.member}
              memberPosition={this.props.memberPosition}
              sectionPosition={index}
              memberDetailsHeight={this.props.memberDetailsHeight}
            />
          );
        })}
      </div>
    );
  }
}
 
export default members;
 
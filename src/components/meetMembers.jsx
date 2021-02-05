import React, { Component } from 'react';
import SectionsNavbar from './sectionsNavbar';
import Members from './members';
import './../css/meetMembers.css'

class MeetMembers extends Component {
  state = {
    role: 'mentors', 
    member: {},
    memberPosition: null,
    memberDetailsHeight: null,
  };

  handleDisplay = (member, index) => {
    console.log(member, index)

    this.setState({member});
    this.setState({memberPosition: index});
  };

  changeRole = (checked) => {
    checked
      ? this.setState({role: "participants"})
      : this.setState({role: 'mentors'});
  };

  handleMeet = (member) => {
    const isMentor = this.state.role === 'mentors'; 
    const members = isMentor ? this.props.participants : this.props.mentors;
    const memberPosition = members
      .filter(mem => mem.section === member.section)
      .findIndex(mem => mem === member)
    this.changeRole(isMentor);
    this.setState({member, memberPosition});
  }

  // getMemberIndex(member, members) {
  //   // const filteredMembers = members
  //   //   .filter(mem => mem.section === member.section);
  //   // const theMember = filteredMembers.find(mem => mem.role === member.role);
  //   // const index = filteredMembers.findIndex(mem => mem === theMember);

  //   const theMember = null;
  //   const index = null;
  //   members
  //     .filter(mem => (mem.section === member.section) && (mem.role === member.role))
  //     .some((mem, index) => {

  //     });
    
  //   console.log("getMemberIndex", { theMember, index })
  //   return { theMember, index };
  // }

  componentDidUpdate(_previousProp, previousState) {
    if(previousState.member !== this.state.member){
      const memberDetailsElement = document.getElementsByClassName('member-details');
      const memberDetails = Array.from(memberDetailsElement)
        .find(element => element.scrollHeight != 0)
      const memberDetailsHeight = memberDetails ? memberDetails.scrollHeight : 0; 

      this.setState({memberDetailsHeight});
    }
  }

  getBadgeclasses = (role) => {
    let classes = "participants-mentors__button-title ";
    classes += role + " ";
    classes += this.state.role === role
      ? "active"
      : null;
    
    return classes;
  };

  render() { 
    return ( 
      <div className="participants-mentors__wrap"> 
        <p className="participants-mentors__title">Meet the mentors and paticipants</p>
        <div className="participants-mentors__button">
            <span
              id="mentors"
              className={this.getBadgeclasses('mentors')}
            >
              Mentors
            </span>

            <label className="switch">
                <input
                  type="checkbox"
                  onChange={(e) => this.changeRole(e.target.checked)}
                  checked={this.state.role === 'participants'}
                />
                <span className="slider round"></span>
            </label>

            <span
              id="participants"
              className={this.getBadgeclasses('participants')}
            >
              Participants
            </span>
        </div>

        <div id="main-container" className="main-container">
          <ul className="sections-list">
            {this.props.sections.map(section =>
              <SectionsNavbar
                key={section.value}
                section={section}
                style={false}
              />
            )}
          </ul>

          <Members
            mentors={this.props.mentors}
            participants={this.props.participants}
            onMeet={this.handleMeet}
            role={this.state.role}
            sections={this.props.sections}
            member={this.state.member}
            handleDisplay={this.handleDisplay}
            memberPosition={this.state.memberPosition}
            memberDetailsHeight={this.state.memberDetailsHeight}
          />
        </div>
      </div>
    );
  }
}
 
export default MeetMembers;
import React from 'react';

const SectionContainer = (props) => {
  const style = props.memberDetailsHeight
    ? {marginBottom: `${props.memberDetailsHeight}px`}
    : {marginBottom: `0`}

  return ( 
    <div className="section-container">
      {props.members
        .map((member, index) => 
          <div key={member.id}>
            <div
              className= "member-container"
              style= {(props.memberPosition === index && props.member.id !== member.id)
                ? style
                : null
              }
              onClick={() => props.onDisplay(member, index)}
            >
              <img className="image" src={member.image} />
              <label className="image-label">{member.name}</label>
            </div>

            <div
              className={getMemberDetailsClass(props, member)}
              style={{left: `calc((100% + 20px) * -${props.sectionPosition})`}}
              id="member-details"
            >
              <span className="member-role">
                {member.role}
              </span>
              <hr className="hr-solid" align="left" />
              <span className="member-name">
                {member.name}
              </span>
              <span className="memeber-description">
                {member.description}
              </span>
              {props.subMembers
                .filter(subMember => subMember.role === member.role)
                .map(subMember => 
                  <div
                    key={subMember.id}
                    className="details-footer"
                    onClick={() => props.onMeet(subMember)}
                  >
                    <img className="member-image" src={subMember.image} />
                    <span
                      className="image-description"
                    >
                      Meet my {props.role === 'mentors' ? 'participant' : 'mentors'} {subMember.name}
                    </span>
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </div>
   );
}
 
export default SectionContainer;

function getMemberDetailsClass(props, member) {
  // console.log(props.member)
  let MemberDetailsClass = props.member.id === member.id
    ? "member-details show"
    : "member-details";

  MemberDetailsClass += props.role === 'participants' 
    ? " active"
    : "";

  return MemberDetailsClass;
}
 
import React from "react";
import "../Styles/team.scss";
import teamData from "../../userdata";

const Team = () => {
  const boxInfo = teamData.map((boxData) => {
    return <Teambox {...boxData} />;
  });
  return <div className="team_box">{boxInfo}</div>;
};

const Teambox = (props) => {
  return (
    <>
      <div className="team_box_inner">
        <div className="team_info ">
          <div className="image">
            <img src={props.img_src} alt="team" />
          </div>
          <div className="details">
            <p className="name">
              cadet name: <span>{props.name}</span>
            </p>
            <br />
            <p className="department">
              department: <span>{props.department}</span>
            </p>
            <br />
            <p className="position">
              position: <span>{props.position}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;

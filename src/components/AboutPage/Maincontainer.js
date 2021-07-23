import React from "react";
import Achievements from "../Data/Achievements.json";

function Maincontainer() {
  return (
    <div className="rightSide">
      {Achievements.map((skill) => {
        return (
          <div className="skillsmain">
            <div className="skillspercent" style={{ width: skill.level }}>
              <p
                style={{
                  marginRight: "10px",
                  paddingTop: "2px",
                }}
              >
                {skill.level}
              </p>

              <div className="skillstitle">{skill.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Maincontainer;

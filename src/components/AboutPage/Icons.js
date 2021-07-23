import React from "react";
import Iconss from "../Data/Iconss.json";

function Icons() {
  return (
    <div className="iconEdit">
      {Iconss.map((icon) => {
        return (
          <ul>
            <div className="iconFrame">
              <li className={icon.Icon}></li>
            </div>
            <li>
              <h2>{icon.Title}</h2>
            </li>
            <li>{icon.Text}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Icons;

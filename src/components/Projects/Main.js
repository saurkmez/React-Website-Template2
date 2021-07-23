import React from "react";
import Job from "../Data/Job.json";

function Main() {
  return (
    <div className="career" id="main">
      <h1>CAREER</h1>
      {Job.map((job) => {
        return (
          <div className="careercontainer">
            <div className="careerall">
              <div className="careertitle">
                <h1>{job.Title}</h1>
                {job.Date}
              </div>
              <div className="companyname">
                <h2>{job.Company}</h2>
              </div>

              <div className="content">
                <p>{job.Text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;

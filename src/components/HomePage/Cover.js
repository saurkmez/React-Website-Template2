import React from "react";
import Button from "./Button";
import Coverletter from "./Coverletter";

function Cover() {
  return (
    <div className={"coverimage"} id="home">
      <div className="covercontainer">
        <div className="coverbox">
          <Coverletter />
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Cover;

import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Icons from "./Icons";
import Skills from "./Skills";
import Picture from "./Picture";
import Aboutme from "./Aboutme";
import Rightside from "./Rightside";
import Maincontainer from "./Maincontainer";

function About() {
  return (
    <div className="about" id="about">
      <Navbar />
      <Header />
      <div className="iconsmainContainer">
        <Icons />
      </div>
      <div className="container">
        <Skills Picture={Picture} Aboutme={Aboutme} />
        <Rightside Maincontainer={Maincontainer} />
      </div>
    </div>
  );
}
export default About;

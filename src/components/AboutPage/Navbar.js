import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handeScrolled = () => {
    const offset = window.scrollY;

    if (offset > 700) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handeScrolled);
  });

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div className={navbarClasses.join(" ")}>
      <ul style={{ margin: "0" }}>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Career
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;

import React from "react";
import { Link } from "react-scroll";

function Button() {
  return (
    <div>
      <button className="button" style={{ margin: "15px" }}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          View my work
        </Link>

        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}
export default Button;

<Link
  activeClass="active"
  to="home"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Home
</Link>;

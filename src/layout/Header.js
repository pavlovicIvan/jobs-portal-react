// React
import React from "react";
import githubImg from "../assets/images/github.svg";
import linkedinImg from "../assets/images/linkedin.svg";

const Header = () => (
  <div className="header">
    <div className="headerContainer">
      <div className="logo">
        Find me a <strong>job</strong>
      </div>
      <div className="flexContainer">
        <a
          href="https://github.com/pavlovicIvan"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkImg" alt="github logo" src={githubImg} />
        </a>
        <a
          href="https://www.linkedin.com/in/ivanpavlo"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkImg" alt="github logo" src={linkedinImg} />
        </a>
      </div>
    </div>
  </div>
);

export default Header;

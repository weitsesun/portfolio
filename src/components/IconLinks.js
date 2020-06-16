import React from "react";
import linkedin from "../images/icons8-linkedin.svg";
import github from "../images/icons8-github.svg";
import cv from "../images/icons8-cv.svg";
import "../styles/IconLinks.css";
import URLs from "../data/greetingData.js";

export default function IconLinks() {
  return (
    <div className="icon-container">
      <a href={URLs.resumeURL} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={cv} alt="resumeURL" />
      </a>
      <a href={URLs.linkedinURL} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={linkedin} alt="linkedin" />
      </a>

      <a href={URLs.githubURL} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={github} alt="github" />
      </a>
    </div>
  );
}

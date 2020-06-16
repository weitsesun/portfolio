import React from "react";
import cv from "../images/icons8-cv.svg";
import linkedin from "../images/icons8-linkedin.svg";
import github from "../images/icons8-github.svg";
import "../styles/IconLinks.css";
import URLs from "../data/IconLinks.js";

export default function IconLinks() {
  console.log(URLs.resumeURL)
  return (
    <div className="icon-container">
      <a href={URLs.resumeURL} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={cv} alt="resume" />
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

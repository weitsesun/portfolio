import React from "react";
import arrowDown from "../images/arrow-down.svg";
import "../styles/ArrowDown.css";

export default function ArrowDown({ arrowTarget }) {
  
  function scrollToSkillsPage() {
    window.scrollTo({
      left: 0,
      top: arrowTarget.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div
      onClick={() => scrollToSkillsPage()}
      className="absolute-pos arrow-container"
    >
      <img
        className="arrowDown absolute-pos"
        src={arrowDown}
        alt="arrow down"
      />
      <img
        className="arrow-shadow absolute-pos"
        src={arrowDown}
        alt="arrow down"
      />
    </div>
  );
}

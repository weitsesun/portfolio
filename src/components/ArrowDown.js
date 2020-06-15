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
    <>
      <img
        className="arrowDown absolute-pos"
        onClick={() => scrollToSkillsPage()}

        src={arrowDown}
        alt="arrow down"
      />
      <img
        className="arrow-shadow absolute-pos"
        onClick={() => scrollToSkillsPage()}
        src={arrowDown}
        alt="arrow down"
      />
    </>
  );
}

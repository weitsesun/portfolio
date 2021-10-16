import React, { useState } from "react";
import cx from "classnames";
import URLs from "../data/greetingData.js";

import {
  greeting_container,
  text,
  small,
  large,
  shine,
  underline,
  margin_up_down,
  button,
  expand,
  text_container,
  profile_pic,
  resume_button
} from "../styles/Greetings.module.css";

// const profile_pic_URL = "https://wtsesun.s3.us-east-2.amazonaws.com/portfolio/profile_picture/profile-picture.png"

export default function Greetings() {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  function sendEmail() {
    window.open(
      URLs.email,
      "_blank"
    );
  }

  function checkResume() {
    window.open(
      URLs.resumeURL,
      "_blank"
    );
  }

  return (
    <div className={greeting_container}>
      <div className={text_container}>
        <div>
          <span className={cx(text, small)}>Hello, I'm</span>
        </div>

        <div className={margin_up_down}>
          <span className={cx(text, large)}>WEI-TSE SUN</span>
          <br />
          <span className={cx(text, large)}>a </span>
          <span className={cx(text, large, shine)}>Software Engineer</span>
        </div>

        <div>
          <span className={cx(text, small)}>
            Expertise in building websites using{" "}
            <span className={underline}>React</span>,{" "}
            <span className={underline}>Redux</span> and{" "}
            <span className={underline}>Node.js</span>
          </span>
        </div>
        
        <div>
        <button
          className={cx(button, resume_button)}
          onClick={() => checkResume()}
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        >
          Resume<div className={cx(isHover2 ? expand : "")}></div>
        </button>

        <button
          className={button}
          onClick={() => sendEmail()}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Let's chat ➝<div className={cx(isHover ? expand : "")}></div>
        </button>
        </div>

        
      </div>

      <div className={profile_pic}>
        <img src={URLs.profile_pic_URL} alt="profile_picture" />
      </div>
    </div>
  );
}

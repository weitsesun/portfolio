import React, { useState } from "react";
import cx from "classnames";
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
  profile_pic
} from "../styles/Greetings.module.css";

const profile_pic_URL = "https://wtsesun.s3.us-east-2.amazonaws.com/portfolio/profile_picture/profile-picture.png"

export default function Greetings() {
  const [isHover, setIsHover] = useState(true);

  function sendEmail() {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=wtse.sun@gmail.com",
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
          <span className={cx(text, large, shine)}>Full Stack Engineer</span>
        </div>

        <div>
          <span className={cx(text, small)}>
            Expertise in building websites using{" "}
            <span className={underline}>React</span>,{" "}
            <span className={underline}>Redux</span> and{" "}
            <span className={underline}>Node.js</span>
          </span>
        </div>

        <button
          className={button}
          onClick={() => sendEmail()}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Let's chat ➝<div className={cx(isHover ? expand : "")}></div>
        </button>
      </div>

      <div className={profile_pic}>
        <img src={profile_pic_URL} alt="profile_picture" />
      </div>
    </div>
  );
}

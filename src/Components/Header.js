import React, { useEffect } from "react";
import HCss from "./CSS/Header.module.css";
import Typewriter from "typewriter-effect";
import video from "./../Videos/video.mp4";
import "./CSS/Header.css";

export default function Header() {
  return (
    <div className={HCss.headmDiv} id="head">
      <video
        src={video}
        className={HCss.videoTag}
        loop="true"
        autoplay="autoplay"
        muted
      ></video>
      <div className={HCss.overlay}>
        <div className="textDiv">
          <p className="text">I'm Rishav Raj Singh</p>
        </div>
        <div className="textDiv">
          <p className="text" id="textCursor">
            <Typewriter
              options={{
                strings: ["A Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

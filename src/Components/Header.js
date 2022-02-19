import React from "react";
import HCss from "./CSS/Header.module.css";
import Typewriter from "typewriter-effect";
import img from "./../img/headerImg.webp";
import "./CSS/Header.css";

export default function Header() {
  return (
    <div className={HCss.headmDiv} id="head">
      <img src={img} alt="" className={HCss.imgTag} />
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

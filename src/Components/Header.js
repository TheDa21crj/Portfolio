import React, { useState, useRef } from "react";
import HCss from "./CSS/Header.module.css";
import Typewriter from "typewriter-effect";
import img from "./../img/headerImg.webp";
import "./CSS/Header.css";

export default function Header() {
  const [cursorX, setcursorX] = useState();
  const [cursorY, setcursorY] = useState();

  const animateRef = useRef(null);

  window.addEventListener("mousemove", function (e) {
    setcursorX(e.pageX);
    setcursorY(e.pageY);

    animateRef.current.focus();

    // animateRef.forEach()

    for (let i = 0; i < animateRef.current.children.length; i++) {
      console.log(animateRef.current.children[i].tagName);
    }

    // console.log(animateRef.current.children);
  });

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
      <div
        className="cursors"
        ref={animateRef}
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import HCss from "./CSS/Header.module.css";
import "./CSS/Header.css";
import Typewriter from "typewriter-effect";

export default function Header() {
  const [state] = useEffect({
    title: "A Full Stack Developer",
  });
  return (
    <div className={HCss.headmDiv} id="head">
      <div className="textDiv">
        <p className="text">I'm Rishav Raj Singh</p>
      </div>
      <div className="textDiv">
        <p className="text" id="textCursor">
          {/* A Full Stack Developer */}
          {state.title}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </p>
      </div>
    </div>
  );
}

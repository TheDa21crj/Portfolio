import React, { useEffect } from "react";
import HCss from "./CSS/Header.module.css";
import "./CSS/Header.css";
import { gsap } from "gsap";

export default function Header() {
  return (
    <div className={HCss.headmDiv} id="head">
      <div className="textDiv">
        <p className="text">I'm Rishav Raj Singh</p>
      </div>
      <div className="textDiv">
        <p className="text">A Full Stack Developer</p>
      </div>
    </div>
  );
}

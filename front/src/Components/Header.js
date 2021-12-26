import React from "react";
import HCss from "./CSS/Header.module.css";

export default function Header() {
  return (
    <div className={HCss.headmDiv} id="head">
      <p data-aos="fade-up">I'm Rishav Raj Singh</p>
      <p data-aos="fade-up">A Full Stack Developer</p>
    </div>
  );
}

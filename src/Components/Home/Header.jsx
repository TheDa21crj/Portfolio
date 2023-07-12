import React from "react";

// css
import HCss from "./Css/Header.module.css";

// img
import ImgReact from "./../../assets/7.png";
import ImgReact2 from "./../../assets/img.jpg";

export default function Header() {
  return (
    <div
      className={HCss.mDiv}
      style={{ backgroundImage: `url(${ImgReact2})` }}
      id="Header"
    >
      <p className={HCss.PTagHeader}>
        Hi,
        <br />
        I'm
        <span> Rishav </span>Singh
        <br />
        Web Developer
      </p>
      <p className={HCss.skiilsPTag}>
        Full Stack Developer | Software Developer
      </p>

      <img src={ImgReact} alt="Img_React" className={HCss.ImgReact} />
      <p className={HCss.GreyText}>DEVELOP</p>
    </div>
  );
}

import React from "react";
import HCss from "./Css/Header.module.css";
import ImgReact from "./../../assets/7.png";
import ImgReact2 from "./../../assets/img.jpg";

export default function Header() {
  return (
    <div className={HCss.mDiv} style={{ backgroundImage: `url(${ImgReact2})` }}>
      <p className={HCss.PTagHeader}>
        Hi,
        <br />
        I'm
        <span> Ayan </span>Paul
        <br />
        Web Developer
      </p>
      <p className={HCss.skiilsPTag}>UI/UX Designer | Frontend Developer </p>

      <img src={ImgReact} alt="Img_React" className={HCss.ImgReact} />
      <p className={HCss.GreyText}>DEVELOP</p>
    </div>
  );
}

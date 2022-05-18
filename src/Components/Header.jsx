import React from "react";
import HCss from "./Css/Header.module.css";
import Img from "./../Img/headerImg.7fbbaf5c.webp";

export default function Header() {
  return (
    <div>
      <div>
        <img src={Img} alt="" srcset="" className={HCss.ImgTag} />
      </div>
    </div>
  );
}

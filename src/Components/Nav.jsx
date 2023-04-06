import React from "react";
import NCss from "./Css/Nav.module.css";

export default function Nav(props) {
  return (
    <div className={NCss.mDiv}>
      <p className={NCss.pTagHead}>{props.leftTitle}</p>
      <div className={NCss.hamburger}>
        <div className={NCss.bur1}></div>
        <div className={NCss.bur2}></div>
        <div className={NCss.bur3}></div>
      </div>
    </div>
  );
}

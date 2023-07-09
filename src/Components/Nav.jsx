import React, { useState } from "react";

// css
import NCss from "./Css/Nav.module.css";

export default function Nav(props) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={NCss.mDiv}>
      <p className={NCss.pTagHead}>{props.leftTitle}</p>
      <div
        className={NCss.hamburger}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={NCss.bur1}
          id={toggle ? "toogleTrueBur1" : "toogleFalseBur1"}
        ></div>
        <div
          className={NCss.bur2}
          id={toggle ? "toogleTrueBur2" : "toogleFalseBur2"}
        ></div>
        <div
          className={NCss.bur3}
          id={toggle ? "toogleTrueBur3" : "toogleFalseBur3"}
        ></div>
      </div>
    </div>
  );
}

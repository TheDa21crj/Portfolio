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
        <div className={NCss.bur1}></div>
        <div className={NCss.bur2}></div>
        <div className={NCss.bur3}></div>
      </div>
    </div>
  );
}

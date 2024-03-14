import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import NCss from "./CSS/Nav.module.css";

export default function Nav(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={NCss.mDiv}>
        <p className={NCss.pTagHead}>
          <Link to="/" className="LinkStyle">
            {props.leftTitle}
          </Link>
        </p>

        {/* <div
          className={NCss.hamburger}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div className={NCss.bur1}></div>
          <div className={NCss.bur2}></div>
          <div className={NCss.bur3}></div>
        </div> */}
      </div>
      <div className={NCss.moboNav} id={toggle ? "showNav" : "HideNav"}>
        <p className={NCss.mobComponent}>
          <Link
            to="/#Header"
            className="LinkStyle"
            onClick={() => {
              setToggle(false);
            }}
          >
            Home
          </Link>
        </p>
        <p className={NCss.mobComponent}>
          <Link
            to="/#Services"
            className="LinkStyle"
            onClick={() => {
              setToggle(false);
            }}
          >
            Services
          </Link>
        </p>
        <p className={NCss.mobComponent}>
          <Link
            to="/#Contact"
            className="LinkStyle"
            onClick={() => {
              setToggle(false);
            }}
          >
            Contact
          </Link>
        </p>
      </div>
    </>
  );
}

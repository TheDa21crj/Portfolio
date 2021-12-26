import React, { useState } from "react";
import { Link } from "react-scroll";
import NavRes from "./NavRes";
import NavCss from "./CSS/Nav.module.css";
import "./CSS/NavRes.css";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [nav, setnav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={NavCss.mDiv} id={nav ? "active" : "hello"}>
      <ul className={NavCss.ul}>
        <li className={NavCss.li}>
          <Link to="head" className={NavCss.linkNav}>
            Home
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="myBio" className={NavCss.linkNav}>
            About
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="portfolio" className={NavCss.linkNav}>
            Protfolio
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="Services" className={NavCss.linkNav}>
            Services
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="ContactUs" className={NavCss.linkNav}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className={NavCss.burger} onClick={() => setShow(!show)}>
        <div> </div> <div> </div> <div> </div>
      </div>
      <div id={show ? "s1" : "s2"}>
        <NavRes />
      </div>
    </div>
  );
}

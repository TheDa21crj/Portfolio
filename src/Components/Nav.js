import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import NavRes from "./NavRes";
import NavCss from "./CSS/Nav.module.css";
import "./CSS/Nav.css";
import "./CSS/NavRes.css";
import { gsap } from "gsap";
import { useSelector, useDispatch } from "react-redux";
import { darkmode } from "./../actions/index";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [nav, setnav] = useState(false);
  const [showDark, setDark] = useState(false);

  const myState = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();
  useEffect(() => {
    gsap.to(".h1Wel1", { y: "0%", duration: 1, stagger: 0.25 });
    gsap.to(".h1Wel2", { y: "0%", duration: 1, stagger: 0.25 }, "-=1");
    gsap.to("#slider", { y: "-100%", duration: 2, delay: 0.75 });
    gsap.to("#NavBackDrop", { y: "-100%", duration: 1 }, "-=1");
    gsap.to(".text", { y: "0%", duration: 1 }, "-=0.2");
  }, []);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  let darkNavmDiv =
    myState === true && nav ? { backgroundColor: "#0a0a0a" } : {};
  return (
    <div className={NavCss.mDiv} id={nav ? "active" : ""} style={darkNavmDiv}>
      <ul className={NavCss.ul}>
        <li className={NavCss.li}>
          <Link to="head" className={NavCss.linkNav} id="activeHome">
            Home
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="myBio" className={NavCss.linkNav} id="activeAbout">
            About
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="portfolio" className={NavCss.linkNav} id="activePort">
            Protfolio
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="Services" className={NavCss.linkNav} id="activeService">
            Services
          </Link>
        </li>
        <li className={NavCss.li}>
          <Link to="ContactUs" className={NavCss.linkNav} id="activeConctact">
            Contact
          </Link>
        </li>
      </ul>
      <ul className={NavCss.ulDark}>
        <li className={NavCss.liDark}>
          <div
            className={NavCss.darkmodeBtn}
            onClick={() => dispatch(darkmode())}
          >
            {showDark ? (
              <Brightness4Icon
                fontSize="large"
                onClick={() => setDark(false)}
              />
            ) : (
              <Brightness7Icon fontSize="large" onClick={() => setDark(true)} />
            )}
          </div>
        </li>
      </ul>
      <div
        className={NavCss.burger}
        onClick={() => {
          setShow(!show);
        }}
      >
        <div> </div> <div> </div> <div> </div>
      </div>
      <div id={show ? "s1" : "s2"}>
        <NavRes />
      </div>
      <div id="NavBackDrop">
        <div className="h1WelPar">
          <h1 className="h1Wel1">Welcome</h1>
        </div>
        <div className="h1WelPar1">
          <h1 className="h1Wel2">@TheDa21crj</h1>
        </div>
      </div>
      <div id="slider"></div>
    </div>
  );
}

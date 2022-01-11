import React from "react";
import { Link } from "react-scroll";
import NavCss from "./CSS/Nav.module.css";
import "./CSS/NavRes.css";

export default function NavRes() {
  return (
    <div className={NavCss.NrmDiv} id="nav">
      <ul>
        <li>
          <Link to="head"> Home </Link>
        </li>
        <li>
          <Link to="myBio"> About </Link>
        </li>
        <li>
          <Link to="portfolio"> Portfolio </Link>
        </li>
        <li>
          <Link to="Services"> Services </Link>
        </li>
        <li>
          <Link to="ContactUs"> Contact Us </Link>
        </li>
      </ul>
    </div>
  );
}

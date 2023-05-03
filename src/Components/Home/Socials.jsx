import React from "react";
import { Link } from "react-router-dom";
// css
import SoCss from "./Css/Socials.module.css";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Socials() {
  return (
    <div className={SoCss.mDiv}>
      <a href="https://www.linkedin.com/in/rishav--singh/" target="_blank">
        <LinkedInIcon fontSize="large" className={SoCss.LinkedIn} />
      </a>
      <a href="https://github.com/TheDa21crj" target="_blank">
        <GitHubIcon fontSize="large" className={SoCss.Github} />
      </a>
    </div>
  );
}

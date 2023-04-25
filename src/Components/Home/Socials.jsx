import React from "react";

// css
import SoCss from "./Css/Socials.module.css";

// icons
import Github from "./../../assets/Github.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Socials() {
  return (
    <div className={SoCss.mDiv}>
      <LinkedInIcon
        fontSize="large"
        style={{ color: "#0a66c2" }}
        className={SoCss.LinkedIn}
      />
      <GitHubIcon fontSize="large" className={SoCss.Github} />
    </div>
  );
}

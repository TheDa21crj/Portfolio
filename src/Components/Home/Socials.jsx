import React from "react";
import SoCss from "./Css/Socials.module.css";

// icons
import LinkedIn from "./../../assets/LinkedIn.png";
import Twitter from "./../../assets/Twitter.png";
import Github from "./../../assets/Github.png";

export default function Socials() {
  return (
    <div className={SoCss.mDiv}>
      <img src={LinkedIn} alt="" className={SoCss.LinkedIn} />
      <img src={Twitter} alt="" className={SoCss.Twitter} />
      <img src={Github} alt="" className={SoCss.Github} />
    </div>
  );
}

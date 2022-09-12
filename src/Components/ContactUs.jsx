import React from "react";
import Map from "./Map";
import "./DarkModeCss/Contact.css";
import { Link } from "react-router-dom";
import CuCss from "./CSS/ContactUs.module.css";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useSelector } from "react-redux";

export default function ContactUs() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div className={CuCss.mDiv} id="ContactUs" data-aos="fade-up">
      <h1> Contact </h1>
      <div className={CuCss.slideDiv}>
        <div className={CuCss.infoDiv}>
          <div className={CuCss.iconsDiv}>
            <CallIcon />
            {/* <p> +234 902 371 8739</p> */}
            <p> +91 9939197376</p>
          </div>
          <div className={CuCss.iconsDiv}>
            <MailIcon />
            <p> rishavrajcrj@gmail.com </p>
          </div>
          <div className={CuCss.iconsDiv0}>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/rishav-raj-singh-a89622211",
              }}
              target="_blank"
            >
              <LinkedInIcon fontSize="large" className={CuCss.iconsDivI0} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/TheDa21crj",
              }}
              target="_blank"
            >
              <GitHubIcon
                fontSize="large"
                className={CuCss.iconsDivI1}
                id={myState === true ? "darkGitHubIcon" : ""}
              />
            </Link>
            <Link
              to={{
                pathname: "https://www.hackerrank.com/rishavrajcrj",
              }}
              target="_blank"
            >
              <img
                src="https://theme.zdassets.com/theme_assets/992614/b90a4eb6d3d6e876e77154967d8755ff9f33db0b.ico"
                alt=""
                className={CuCss.hackerrankIcon}
              />
            </Link>
          </div>
        </div>
        <div className={CuCss.mapDiv}>
          <Map />
        </div>
      </div>
    </div>
  );
}

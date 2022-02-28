import React from "react";
import { Link } from "react-router-dom";
import PwCss from "./CSS/ProWork.module.css";
import InfoIcon from "@material-ui/icons/Info";

export default function ProWork(props) {
  return (
    <div className={PwCss.mdiv} data-aos="fade">
      <img src={props.img} alt="" className={PwCss.imgPw} />
      <h3 className={PwCss.pwH3}>{props.title}</h3>
      <p>{props.des}</p>
      {/* <div> */}
      <Link to={props.link} target="_blank" className={PwCss.LinkP}>
        Github
      </Link>
      {/* <Link to={props.link} target="_blank" className={PwCss.LinkP}>
          Info
        </Link> */}
      {/* </div> */}
    </div>
  );
}

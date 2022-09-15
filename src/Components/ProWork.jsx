import React from "react";
import { Link } from "react-router-dom";
import PwCss from "./CSS/ProWork.module.css";

export default function ProWork(props) {
  console.log(props.showLink);

  return (
    <div className={PwCss.mdiv} data-aos="fade">
      <img src={props.img} alt="" className={PwCss.imgPw} />
      <h3 className={PwCss.pwH3}>{props.title}</h3>
      <p>{props.des}</p>
      <div className={PwCss.LinkDiv}>
        <a href={props.link} target="_blank" className={PwCss.LinkP}>
          Github
        </a>
        {typeof props.showLink != "undefined" ? (
          <a href={props.showLink} target="_blank" className={PwCss.LinkP}>
            View
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

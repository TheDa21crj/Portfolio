import React from "react";
import NDCss from "./Css/NavDes.module.css";

export default function NavUl(props) {
  return <li className={NDCss.li}>{props.liName}</li>;
}

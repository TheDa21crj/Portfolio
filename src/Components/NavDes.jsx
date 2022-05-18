import React from "react";
import NavUl from "./NavUl";
import NDCss from "./Css/NavDes.module.css";

export default function NavDes() {
  return (
    <div className={NDCss.mDiv}>
      <div className={NDCss.NavmDiv}>
        <ul className={NDCss.ul}>
          <NavUl liName="Home" />
          <NavUl liName="About" />
          <NavUl liName="Portfolio" />
          <NavUl liName="Services" />
          <NavUl liName="Contact" />
        </ul>
      </div>
    </div>
  );
}

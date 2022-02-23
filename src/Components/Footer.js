import React from "react";
import "./CSS/Footer.css";
import { useSelector } from "react-redux";

export default function Footer() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div
      // className={FCss.mDiv}
      className={myState === true ? "darkmDiv" : "mDiv"}
    >
      <p>Made With ❤️</p>
    </div>
  );
}

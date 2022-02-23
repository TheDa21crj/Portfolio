import React from "react";
import FCss from "./CSS/Footer.module.css";
import { useSelector } from "react-redux";

export default function Footer() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div className={FCss.mDiv}>
      <p>Made With ❤️</p>
    </div>
  );
}

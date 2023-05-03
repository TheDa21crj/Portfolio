import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// Css
import PCSS from "./Css/Portfolio.module.css";

// Data
import Graphic from "./../../Data/Graphic.json";
import App from "./../../Data/App.json";
import Web from "./../../Data/Web.json";

export default function Portfolio() {
  const [show, set] = useState("Web");
  const [map, setMap] = useState(Graphic);

  useEffect(() => {
    if (show === "Graphic") {
      setMap(Graphic);
    } else if (show === "App") {
      setMap(App);
    } else if (show === "Web") {
      setMap(Web);
    }
  }, [show]);

  return (
    <div className={PCSS.mDiv}>
      <p className={PCSS.GreyText}>DESIGN</p>
      <div className={PCSS.herderDiv}>
        <div className={PCSS.btnDivP}>
          <div
            className={PCSS.GRAPHIC}
            id={show === "Graphic" ? "selected" : "NotSelected"}
            onClick={() => set("Graphic")}
          >
            GRAPHIC
          </div>
          <div
            className={PCSS.WEB}
            id={show === "Web" ? "selected" : "NotSelected"}
            onClick={() => set("Web")}
          >
            WEB
          </div>
          <div
            className={PCSS.APP}
            id={show === "App" ? "selected" : "NotSelected"}
            onClick={() => set("App")}
          >
            APP
          </div>
        </div>
      </div>
      <>
        {map ? (
          <div className={PCSS.mapParentDiv}>
            {map.map((value, key) => {
              return (
                <img
                  key={key}
                  src={value.img}
                  alt=""
                  className={PCSS.mapImgTag}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

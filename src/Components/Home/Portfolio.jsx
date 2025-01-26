import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Css
import PCSS from "./Css/Portfolio.module.css";

// Data
import Web from "./../../Data/Web.json";
import Others from "./../../Data/Others.json";
import Graphic from "./../../Data/Graphic.json";

export default function Portfolio() {
  const [show, set] = useState("Web");
  const [map, setMap] = useState(Graphic);

  useEffect(() => {
    if (show === "Graphic") {
      setMap(Graphic);
      // } else if (show === "Others") {
      //   setMap(Others);
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
            Graphic
          </div>
          <div
            className={PCSS.WEB}
            id={show === "Web" ? "selected" : "NotSelected"}
            onClick={() => set("Web")}
          >
            Web
          </div>
          {/* <div
            className={PCSS.APP}
            id={show === "Others" ? "selected" : "NotSelected"}
            onClick={() => set("Others")}
          >
            Others
          </div> */}
        </div>
      </div>
      <>
        {map ? (
          <div className={PCSS.mapParentDiv}>
            {map.map((value, key) => {
              return (
                <div className={PCSS.mapmDivTag}>
                  <img
                    key={key}
                    src={value.img}
                    alt=""
                    className={PCSS.mapImgTag}
                  />
                  <div className={PCSS.hoverDataMDiv}>
                    <a
                      href={value.link}
                      className={PCSS.ViewBtn}
                      target="_blank"
                    >
                      View
                    </a>
                  </div>
                </div>
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

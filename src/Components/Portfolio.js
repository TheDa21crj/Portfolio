import React from "react";
import { Link } from "react-router-dom";
import JSONDATA from "./../Data/Portfolio.json";
import ProWork from "./ProWork";
import PCss from "./CSS/Portfolio.module.css";
import img0 from "../img/dance1.png";
import img1 from "../img/ecc.png";
import img2 from "../img/mern.png";
import img3 from "../img/api.png";
import img4 from "../img/CustomVid.png";
import img5 from "../img/memorygame.png";

export default function Portfolio() {
  return (
    <div className={PCss.mDiv} id="portfolio" data-aos="fade-up">
      <h1>Portfolio</h1>
      <div className={PCss.pDiv}>
        {JSONDATA.map((value, key) => {
          return (
            <div key={key}>
              <ProWork
                img={value.img}
                title={value.name}
                des={value.description}
                link={{
                  pathname: `${value.url}`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

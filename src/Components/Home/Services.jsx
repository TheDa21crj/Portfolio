import React from "react";
import img from "./../../assets/services.png";
import SCss from "./Css/Services.module.css";

export default function Services() {
  return (
    <div className={SCss.mDiv}>
      <p className={SCss.GreyText}>VARSITY</p>
      <div className={SCss.mCont}>
        <div className={SCss.Box}>
          <p className={SCss.titleService}>My Services</p>
          <img src={img} alt="" className={SCss.imgSrc} />
          <p className={SCss.serviceName}>UI Designer | Frontend</p>
        </div>
      </div>
      <p className={SCss.GreyText2}>RESEARCH</p>
    </div>
  );
}

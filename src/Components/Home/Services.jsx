import React from "react";

// css
import SCss from "./Css/Services.module.css";

// img
import img from "./../../assets/services.png";

export default function Services() {
  return (
    <div className={SCss.mDiv} id="Services">
      <p className={SCss.GreyText}>VARSITY</p>
      <div className={SCss.mCont}>
        <div className={SCss.Box}>
          <p className={SCss.titleService}>My Services</p>
          <img src={img} alt="" className={SCss.imgSrc} />
          <p className={SCss.serviceName}>
            Full Stack Developer | Software Developer | Consultant
          </p>
        </div>
      </div>
      <p className={SCss.GreyText2}>RESEARCH</p>
    </div>
  );
}

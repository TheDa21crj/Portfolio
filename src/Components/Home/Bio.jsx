import React from "react";

// css
import BCss from "./Css/Bio.module.css";

export default function Bio() {
  return (
    <div className={BCss.mDiv}>
      <p className={BCss.pTagMain}>Me, Myself & I</p>
      <p className={BCss.desPTag}>
        A small gallery of recent projects chosen by me. I've done them all
        together with amazing people from companies around the globe. It's only
        a drop in the ocean compared to the entire list.
      </p>
      <div className={BCss.BtnPDiv}>
        {/* <button className={BCss.ReadMore}>
          <p>Read More</p>
        </button> */}
        {/* <div className={BCss.downloadtext}>
          <p>Download CV</p>
        </div> */}
      </div>
    </div>
  );
}

import React from "react";
import "./CSS/Map.css";
import { useSelector } from "react-redux";

export default function () {
  const myState = useSelector((state) => state.darkmode);

  let darkgmap_canvas =
    myState === true ? { filter: "grayscale(20%) invert(95%)" } : {};
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas" style={darkgmap_canvas}>
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=sona%20village&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://123movies-to.org"></a>
          <br />
          <a href="https://www.embedgooglemap.net">
            add google maps to website
          </a>
        </div>
      </div>
    </div>
  );
}

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
          {/* <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=sona%20village&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe> */}
          <iframe
            width="520"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=St.%20No.%20-%2070,%20Qt.%20No.%20-%202A%20Mihijam+(Rishav)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://www.symptoma.it/">https://www.symptoma.it/</a>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=f107d69b2ba4a9b9084964896da511f8d5660fdf"
          ></script>
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

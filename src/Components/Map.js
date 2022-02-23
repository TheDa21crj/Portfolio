// import React from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         style={{ width: "100%", height: "100%" }}
//         initialCenter={{ lat: 27.2046, lng: 77.4977 }}
//         zoom={15}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCoGEg5Bgw7PSWLQpbGkDUs3LlvOAAO6zE",
// })(MapContainer);

import React from "react";
import "./CSS/Map.css";
import { useSelector } from "react-redux";

export default function () {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div>
      <div className="mapouter">
        <div className={myState === true ? "darkgmap_canvas" : "gmap_canvas"}>
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

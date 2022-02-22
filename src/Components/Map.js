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
import Map from "./CSS/Map.css";

export default function () {
  return (
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=6.721868,3.229548&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://putlocker-is.org"></a>
          <br />
          <a href="https://www.embedgooglemap.net">
            how to add google map to website
          </a>
        </div>
      </div>
    </div>
  );
}

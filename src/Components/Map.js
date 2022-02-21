import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        initialCenter={{ lat: 27.2046, lng: 77.4977 }}
        zoom={15}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCoGEg5Bgw7PSWLQpbGkDUs3LlvOAAO6zE",
})(MapContainer);

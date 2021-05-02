import { useState } from "react";
import GoogleMapReact from "google-map-react";
import React from "react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  console.log("🚀 ~ file: map.js ~ line 8 ~ Map ~ zoom", zoom);
  console.log("🚀 ~ file: map.js ~ line 8 ~ Map ~ center", center);
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lng={ev.geometries[0].coordinates[0]}
          lat={ev.geometries[0].coordinates[1]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          key={ev.id}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "GOOGLE_API_KEY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo ? <LocationInfoBox info={locationInfo} /> : null}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;

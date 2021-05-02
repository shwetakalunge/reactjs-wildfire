import React from "react";

const LocationInfoBox = (props) => {
  const { info } = props;
  const { id, title } = info;
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <li>
        Id: <strong>{id}</strong>
      </li>
      <li>
        Title: <strong>{title}</strong>
      </li>
    </div>
  );
};

export default LocationInfoBox;

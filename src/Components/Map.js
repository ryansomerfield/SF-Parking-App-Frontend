import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState(
    {
      height: "100%",
      width: "100%",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 11.75,
    },
    []
  );

  useEffect(() => {
    function handleResize() {
      setViewport({
        height: "100%",
        width: "100%",
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: viewport.zoom,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="mapDiv">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onClick={handleClick}
        onViewportChange={setViewport}
      />
    </div>
  );
};

export default Map;

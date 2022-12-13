import React from "react";

const Home = () => {
  const mapPoints = ["20,20 70,20 120,20 170,20, 50, 70, 200, 100, 1000, 100"];

  return (
    <div className="kpn-map-container">
      <svg className="kpn-map-svg">
        <polyline class="kpn-map-line" points={mapPoints} />
        <marker
          id="kpn-circle-marker"
          markerWidth="8"
          markerHeight="8"
          refX="5"
          refY="5"
        >
          <circle class="" cx="5" cy="5" r="3" />
        </marker>
      </svg>
    </div>
  );
};

export default Home;

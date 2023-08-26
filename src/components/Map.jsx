"use client";

import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function MapChart() {
  return (
    <ComposableMap
      projection="geoOrthographic"
      projectionConfig={{
        rotate: [-90, -23, 0],
        center: [-10, -20],
        scale: 500,
      }}
    >
      <Geographies
        geography={geoUrl}
        fill="#e0fbfc"
        stroke="#3d5a80"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[90, 24]}
        dx={90}
        dy={-60}
        curve={1}
        connectorProps={{
          stroke: "#ee6c4d",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="80"
          y="0"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#ee6c4d"
        >
          From here
        </text>
      </Annotation>
    </ComposableMap>
  );
}

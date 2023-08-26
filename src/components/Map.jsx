"use client";

import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import style from "../styles/Contact.module.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  return (
    <div className={style.map}>
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
          strokeWidth={1}
          style={{ stroke: "var(--color02)", fill: "var(--color03)" }}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[90, 24]}
          dx={70}
          dy={-60}
          curve={0.8}
          connectorProps={{
            stroke: "#ee6c4d",
            strokeWidth: 1,
            strokeLinecap: "round",
          }}
        >
          <text
            x="35"
            textAnchor="end"
            fontSize={12}
            alignmentBaseline="middle"
            fill="#ee6c4d"
          >
            Hello!
          </text>
        </Annotation>
      </ComposableMap>
    </div>
  );
}

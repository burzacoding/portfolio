import React from "react";

const Hamburguer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Hamburguer">
        <rect
          id="Top"
          x="16"
          y="6"
          width="12"
          height="4"
          rx="2"
        />
        <rect
          id="Middle"
          x="4"
          y="14"
          width="24"
          height="4"
          rx="2"
        />
        <rect
          id="Bottom"
          x="4"
          y="22"
          width="24"
          height="4"
          rx="2"
        />
      </g>
    </svg>
  );
};

export default Hamburguer;

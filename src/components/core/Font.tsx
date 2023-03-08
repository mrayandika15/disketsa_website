import { Global } from "@emotion/react";
import React from "react";

const Font: React.FC = () => {
  return (
    <Global
      styles={`

    //  georgia bold italic
     @font-face {
    font-family: 'Georgia';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('./fonts/georgia/georgia bold italic.ttf') format('ttf')
  }

  `}
    ></Global>
  );
};

export default Font;

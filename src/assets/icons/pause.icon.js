import React from "react";
import Svg, { Path } from "react-native-svg";

const PauseIcon = ({ fill }) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M11.3333 0H4.66669C3.564 0 2.66669 0.897313 2.66669 2V30C2.66669 31.1027 3.564 32 4.66669 32H11.3334C12.4361 32 13.3334 31.1027 13.3334 30V2C13.3333 0.897313 12.436 0 11.3333 0Z"
        fill={fill}
      />
      <Path
        d="M27.3333 0H20.6667C19.564 0 18.6667 0.897313 18.6667 2V30C18.6667 31.1027 19.564 32 20.6667 32H27.3334C28.4361 32 29.3334 31.1027 29.3334 30V2C29.3333 0.897313 28.436 0 27.3333 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export { PauseIcon };

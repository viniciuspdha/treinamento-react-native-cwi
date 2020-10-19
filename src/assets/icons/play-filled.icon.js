import React from 'react';
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

const PlayFilledIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0)">
        <Path
          d="M27.481 15.3726L5.38525 0.134099C5.15134 -0.0266665 4.84809 -0.0434288 4.59818 0.08686C4.34751 0.218673 4.19055 0.477726 4.19055 0.761162V31.2381C4.19055 31.5215 4.34751 31.7813 4.59818 31.9131C4.70942 31.971 4.83133 32 4.95247 32C5.1041 32 5.25496 31.9543 5.38525 31.8651L27.481 16.6267C27.6875 16.4842 27.8102 16.2503 27.8102 15.9996C27.8102 15.7489 27.6867 15.515 27.481 15.3726Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { PlayFilledIcon };

import * as React from "react";
import Svg, { Defs, G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

function SvgComponent(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="#fff" {...props}>
      <Defs></Defs>
      <G
        transform="translate(-348 -62)"
        filter="url(#prefix__a)"
        fill="none"
        fillRule="evenodd"
      >
        <Path d="M348 62h39.6v39.6H348V62z" />
        <Path d="M351 65.2h33.4v33.4H351z" />
        <Path d="M354.8 68.8h26v26h-26z" />
        <G
          transform="translate(357.2 70.4)"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Circle
            strokeWidth={0.5}
            fill="#fff"
            cx={16.98}
            cy={3.396}
            r={3.396}
          />
          <Circle
            strokeWidth={0.5}
            fill="#fff"
            cx={3.396}
            cy={11.32}
            r={3.396}
          />
          <Circle
            strokeWidth={0.5}
            fill="#fff"
            cx={16.98}
            cy={19.244}
            r={3.396}
          />
          <Path
            strokeWidth={2}
            d="M6.328 13.029l7.731 4.506M14.048 5.105l-7.72 4.506"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

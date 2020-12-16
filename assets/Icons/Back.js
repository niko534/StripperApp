import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

function SvgComponent(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
      <Defs></Defs>
      <G
        transform="translate(-26 -62)"
        filter="url(#prefix__a)"
        fill="none"
        fillRule="evenodd"
      >
        <Path d="M26 62h39.6v39.6H26V62z" />
        <Path d="M28.86 65.3h33.413v33.413H28.86z" />
        <Path d="M32.6 69.04h25.988v25.988H32.6z" />
        <G
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <Path d="M54.08 82.04H35.6M44.84 91.28l-9.24-9.24 9.24-9.24" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

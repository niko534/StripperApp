import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function MenuDots(props) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" {...props}>
      <G fill="none" fillRule="evenodd">
        <G
          transform="translate(8.4 19.8)"
          fill={props.fill}
          stroke={props.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Circle cx={9.6} cy={1.2} r={1.2} />
          <Circle cx={18} cy={1.2} r={1.2} />
          <Circle cx={1.2} cy={1.2} r={1.2} />
        </G>
        <Path d="M0 0h35.64v35.64H0z" />
        <Path d="M2.568 2.964H32.64v30.072H2.568z" />
        <Path d="M4.8 4.8H30V30H4.8z" />
      </G>
    </Svg>
  );
}

export default MenuDots;

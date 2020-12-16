import * as React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CalendarIcon(props) {
  return (
    <Svg width={33} height={33} viewBox="0 0 33 33" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h32.174v32.906H0V0z" />
        <Path d="M2.324 2.742h27.147v27.764H2.324z" />
        <Path d="M5.362 5.983h21.114v21.594H5.362z" />
        <G
          transform="translate(7.8 9.679)"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Rect y={1.895} width={16.679} height={14.625} rx={1.954} />
          <Path d="M12.046 0v3.791M4.633 0v3.791M0 7.581h16.679" />
        </G>
      </G>
    </Svg>
  );
}

export default CalendarIcon;

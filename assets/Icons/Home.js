import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Home(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h30v30H0V0z" />
        <Path d="M2.167 2.5H27.48v25.313H2.167z" />
        <Path d="M5 5.333h19.688v19.688H5z" />
        <Path
          d="M7.273 12.41l7.772-6.046 7.773 6.045v9.5c0 .954-.773 1.727-1.727 1.727H9a1.727 1.727 0 01-1.727-1.727v-9.5z"
          stroke=""
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.585 5.772l-7.773 6.045a.75.75 0 00-.29.592v9.5A2.477 2.477 0 009 24.386h12.09a2.477 2.477 0 002.478-2.477v-9.5a.75.75 0 00-.29-.592l-7.772-6.045a.75.75 0 00-.921 0zm.46 1.542l7.023 5.462v9.133c0 .54-.437.977-.977.977H9l-.114-.006a.977.977 0 01-.863-.97v-9.135l7.022-5.461z"
          fill={props.fill}
          fillRule="nonzero"
        />
        <Path
          stroke={props.fill}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.455 23.636V15h5.181v8.636"
        />
      </G>
    </Svg>
  );
}

export default Home;

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Capsule(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4.05a3.95 3.95 0 00-2.793 1.157l-8 8a3.95 3.95 0 005.586 5.586l8-8A3.95 3.95 0 0016 4.05zM3.793 11.793a5.95 5.95 0 008.414 8.414l8-8a5.95 5.95 0 10-8.414-8.414l-8 8z"
        fill="#231F20"
        {...props}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.793 7.793a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414z"
        fill="#231F20"
        {...props}
      />
    </Svg>
  )
}

export default Capsule
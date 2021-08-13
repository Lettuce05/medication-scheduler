import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Medication(props) {
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
        d="M19 19V8c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zM7 17v2h10V8H7v2h7v7H7zm0-2v-3h5v3H7zM6 3h12v2H6V3z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Medication
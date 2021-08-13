import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Add(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 7a1 1 0 01-1 1H8v5a1 1 0 11-2 0V8H1a1 1 0 010-2h5V1a1 1 0 012 0v5h5a1 1 0 011 1z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Add

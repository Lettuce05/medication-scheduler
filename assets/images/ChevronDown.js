import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronDown(props) {
  return (
    <Svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.123 1.002l3.88 3.88 3.88-3.88a.997.997 0 011.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default ChevronDown
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronLeft(props) {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.998 2.127l-3.88 3.88 3.88 3.88a.998.998 0 01-1.41 1.41l-4.59-4.59a.996.996 0 010-1.41l4.59-4.59a.996.996 0 011.41 0c.38.39.39 1.03 0 1.42z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default ChevronLeft

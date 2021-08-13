import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronRight(props) {
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
        d="M.997 2.127l3.88 3.88-3.88 3.88a.998.998 0 001.41 1.41l4.59-4.59a.996.996 0 000-1.41L2.407.707a.996.996 0 00-1.41 0c-.38.39-.39 1.03 0 1.42z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default ChevronRight

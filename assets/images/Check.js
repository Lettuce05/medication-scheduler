import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Check(props) {
  return (
    <Svg
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.722.294l-8.48 8.48-3.54-3.54a.997.997 0 00-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18a1 1 0 00-.01-1.42c-.37-.38-1-.38-1.39.01z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Check;
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Minus(props) {
  return (
    <Svg
      width={12}
      height={2}
      viewBox="0 0 12 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 0h10c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Minus

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Injection(props) {
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
        d="M11.15 15.18l-1.42-1.41 1.42-1.42 1.41 1.42 1.41-1.42-1.41-1.41 1.41-1.41 1.42 1.41 1.41-1.41-2.83-2.83-7.07 7.07 2.83 2.83 1.42-1.42zM3.08 19l3.12-3.11-2.12-2.12 9.89-9.9L16.1 6l1.4-1.42-1.4-1.42 1.4-1.41L21.75 6l-1.41 1.4L18.92 6 17.5 7.4l2.13 2.13-9.9 9.89-2.12-2.12-4.53 4.54V19z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Injection

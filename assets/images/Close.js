import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Close(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.95 10.95a1 1 0 01-1.414 0L6 7.414 2.464 10.95A1 1 0 111.05 9.536L4.586 6 1.05 2.465A1 1 0 012.464 1.05L6 4.586 9.536 1.05a1 1 0 111.414 1.415L7.414 6l3.536 3.536a1 1 0 010 1.414z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Close

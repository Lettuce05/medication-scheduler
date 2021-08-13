import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Drops(props) {
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
        d="M7 15a5 5 0 1010 0c0-1.726-1.66-5.031-5-9.653C8.66 9.969 7 13.274 7 15zm5-13c4.667 6.09 7 10.423 7 13a7 7 0 11-14 0c0-2.577 2.333-6.91 7-13z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Drops

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Style(props) {
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
        d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98a2.014 2.014 0 00-1.81-1.23c-.26 0-.53.04-.79.15L7.1 5.95a1.999 1.999 0 00-1.08 2.6l4.96 11.97a1.998 1.998 0 002.6 1.08l7.36-3.05a1.994 1.994 0 001.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z"
        fill="#231F20"
      />
      <Path
        d="M11 10a1 1 0 100-2 1 1 0 000 2zM5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Style
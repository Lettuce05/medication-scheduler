import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props) {
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
        d="M20.29 18.88l-5.56-5.56c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44a6.511 6.511 0 00-7.72 7.72c.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56a.997.997 0 001.41-1.41zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Search

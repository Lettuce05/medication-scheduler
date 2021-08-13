import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Suppository(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2h12a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zM3 3a3 3 0 013-3h12a3 3 0 013 3v18a3 3 0 01-3 3H6a3 3 0 01-3-3V3zm10.337 3.983l1.011 3.236a7.999 7.999 0 01.227 3.86l-.582 3.105a1 1 0 01-.983.816h-2.02a1 1 0 01-.983-.816l-.582-3.104a8 8 0 01.227-3.86l1.011-3.237a1.4 1.4 0 012.674 0zm-4.583-.597a3.4 3.4 0 016.492 0l1.011 3.237a10 10 0 01.284 4.825l-.582 3.105A3 3 0 0113.01 20h-2.02a3 3 0 01-2.949-2.447l-.582-3.105a10 10 0 01.284-4.825l1.011-3.237z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Suppository
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Liquid(props) {
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
        d="M4 3h6v2H4V3zm-.857 4H3a1 1 0 01-1-1V3a2 2 0 012-2h6a2 2 0 012 2v3a1 1 0 01-1 1h-.143v.393l1.368 1.513A3 3 0 0113 10.918V20a3 3 0 01-3 3H4a3 3 0 01-3-3v-9.082a3 3 0 01.775-2.012l1.368-1.513V7zM3 20v-1h6v-7H3v-1.082a1 1 0 01.258-.67l1.368-1.514a2 2 0 00.517-1.341V7h3.714v.393a2 2 0 00.517 1.341l1.368 1.514a1 1 0 01.258.67V20a1 1 0 01-1 1H4a1 1 0 01-1-1zm0-3v-3h4v3H3zm17.442-8.489c.269-.26.558-.747.558-1.678 0-.986-.332-2.067-.848-2.862C19.6 3.124 19.132 3 19 3c-.133 0-.6.124-1.152.971A5.504 5.504 0 0017 6.833c0 .93.289 1.419.558 1.678.287.275.757.489 1.442.489.685 0 1.155-.214 1.442-.489zM23 6.833c0 2.332-1.277 3.697-3.005 4.065.003.034.005.068.005.102v11a1 1 0 11-2 0V11c0-.034.002-.068.005-.102C16.277 10.53 15 9.165 15 6.833 15 4.072 16.79 1 19 1s4 3.072 4 5.833z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default Liquid

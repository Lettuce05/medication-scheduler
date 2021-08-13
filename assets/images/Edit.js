import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Edit(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M28.12 18.04l1.84 1.84L11.84 38H10v-1.84l18.12-18.12zM35.32 6c-.5 0-1.02.2-1.4.58l-3.66 3.66 7.5 7.5 3.66-3.66a1.992 1.992 0 000-2.82l-4.68-4.68c-.4-.4-.9-.58-1.42-.58zm-7.2 6.38L6 34.5V42h7.5l22.12-22.12-7.5-7.5z"
        fill="#000"
      />
    </Svg>
  )
}

export default Edit
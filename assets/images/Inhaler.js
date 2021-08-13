import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Inhaler(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.52 2.847a1 1 0 01.56-1.299L5.799.071a1 1 0 011.298.56l1.116 2.807.917-.367a1 1 0 011.297.552L15.672 16.5H22a1 1 0 011 1V23a1 1 0 01-1 1H8.5a1 1 0 01-.926-.624l-6.5-16a1 1 0 01.555-1.305l1.013-.405-1.121-2.82zm2.229.19l.739 1.859 1.858-.739-.739-1.859-1.858.74zm-.444 4.518L9.173 22H16.5v-3.5H15a1 1 0 01-.926-.623L8.949 5.297 3.305 7.555zM18.5 18.5V22H21v-3.5h-2.5z"
          fill="#231F20"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Inhaler
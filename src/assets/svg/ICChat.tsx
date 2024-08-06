import React from 'react'
import Svg, { Defs, Path, Polygon, Rect } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICChat = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg fill="#000000" width={size} height={size} viewBox="0 0 24 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M8.35078106,18 L3.62469505,21.7808688 C2.9699317,22.3046795 2,21.8385062 2,21 L2,5 C2,3.34314575 3.34314575,2 5,2 L19,2 C20.6568542,2 22,3.34314575 22,5 L22,15 C22,16.6568542 20.6568542,18 19,18 L8.35078106,18 Z M4,18.9193752 L7.37530495,16.2191312 C7.552618,16.0772808 7.7729285,16 8,16 L19,16 C19.5522847,16 20,15.5522847 20,15 L20,5 C20,4.44771525 19.5522847,4 19,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,18.9193752 Z"
      />
    </Svg>
  )
}

export default ICChat

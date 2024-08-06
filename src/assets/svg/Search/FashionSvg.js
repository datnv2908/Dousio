import { Colors, moderateScale } from '@/theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={moderateScale(size)}
    width={moderateScale(size)}
  >
    <Path
      fill={color}
      d="M486.238 211.926 465.284 86.207c-3.391-20.343-18.568-36.487-38.665-41.125l-80.203-18.508L331.079 3.57a8.016 8.016 0 0 0-5.615-3.5 7.777 7.777 0 0 0-1.055-.061V0H187.591v.006a7.79 7.79 0 0 0-1.055.064 8.017 8.017 0 0 0-5.615 3.5l-15.336 23.005L85.38 45.084c-20.097 4.638-35.273 20.78-38.665 41.125L25.762 211.926a8.016 8.016 0 0 0 4.93 8.762l80.473 32.189v251.107a8.017 8.017 0 0 0 8.017 8.017h273.637a8.017 8.017 0 0 0 8.017-8.017V252.877l80.473-32.189a8.02 8.02 0 0 0 4.929-8.762zM331.971 33.81 297.05 89.683a.501.501 0 0 1-.363.245.506.506 0 0 1-.423-.11L268.49 67.599l54.32-47.53 9.161 13.741zm-28.899-17.777L256 57.222l-47.073-41.189h94.145zm-37.986 69.376v76.529a.535.535 0 0 1-.534.534H247.45a.535.535 0 0 1-.534-.534V85.409L256 78.14l9.086 7.269zm-75.895-65.341 54.32 47.53-27.773 22.219a.511.511 0 0 1-.423.11.501.501 0 0 1-.363-.244L180.031 33.81l9.16-13.742zm-78.026 215.54-68.526-27.411 2.647-15.877 65.879 26.353v16.935zm273.637 260.359H127.198v-18.171h257.603v18.171zm8.016-350.597a8.017 8.017 0 0 0-8.017 8.017v308.376H127.198V153.386c0-4.428-3.589-8.017-8.017-8.017s-8.017 3.588-8.017 8.017v48.017l-63.18-25.273L62.53 88.844c2.32-13.919 12.705-24.964 26.455-28.139l77.734-17.939 34.634 55.416a16.583 16.583 0 0 0 14.045 7.785c3.736 0 7.398-1.265 10.354-3.63l5.127-4.1v63.701c0 9.136 7.432 16.568 16.568 16.568h17.102c9.136 0 16.568-7.432 16.568-16.568V98.237l5.127 4.101a16.59 16.59 0 0 0 13.132 3.395 16.579 16.579 0 0 0 11.267-7.551l34.634-55.415 77.735 17.938c13.75 3.175 24.136 14.219 26.455 28.139l14.548 87.286-63.183 25.273v-48.017a8.011 8.011 0 0 0-8.014-8.016zm8.017 90.238v-16.936l65.88-26.351 2.647 15.877-68.527 27.41z"
    />
  </Svg>
)

export default SvgComponent

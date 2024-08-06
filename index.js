/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import './src/translations/i18n'
import 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'

AppRegistry.registerComponent(appName, () => App)
TrackPlayer.registerPlaybackService(() => require('./service.js'))
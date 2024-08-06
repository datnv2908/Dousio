import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import React, { useRef, useState } from 'react'
import Box from '@/components/Box'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { Colors } from '@/theme'
import Icon from '@/assets/svg/Icon'
import _ from 'lodash'
import Album from '@/screens/Profile/components/Album'
import AppText from '@/components/AppText'
import Playlist from './Playlist'
import { TouchableOpacity } from 'react-native-gesture-handler'

const screenWidth = Dimensions.get('screen').width

const MusicTabView = () => {
  const scrollRef = useRef<ScrollView>()
  const scrollTabX = useSharedValue<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const translateX = useSharedValue<number>(0)

  const tabs = [
    { key: 1, title: 'Playlist' },
    { key: 2, title: 'Album' },
  ]

  const renderTabView = () => {
    const styleAnimated = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: translateX.value }],
      }
    })

    const { width } = useWindowDimensions()

    const onPressTab = (index: number) => {
      const tabWidth = 80
      const newX = index * tabWidth
      translateX.value = withSpring(newX)
      scrollTabX.value = withTiming(newX)
      scrollRef.current.scrollTo({ x: index * screenWidth, animated: true })
    }

    return (
      <Box paddingBottom={20} paddingHorizontal={4}>
        <Box row paddingBottom={5}>
          {_.map(tabs, (item, index) => {
            const styleTextAnimated = useAnimatedStyle(() => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ]
              const opacity = interpolate(
                scrollTabX.value,
                inputRange,
                [0.8, 1, 0.8],
                Extrapolate.CLAMP,
              )
              return {
                opacity: opacity,
              }
            })

            return (
              <TouchableOpacity onPress={() => onPressTab(index)} key={index}>
                <Box width={80} center>
                  <Animated.Text
                    style={[
                      styleTextAnimated,
                      { fontSize: 18, fontWeight: 'bold', color: Colors.white },
                    ]}
                  >
                    {item.title}
                  </Animated.Text>
                </Box>
              </TouchableOpacity>
            )
          })}
        </Box>

        <Box width={160} paddingHorizontal={20}>
          <Animated.View
            style={[
              {
                width: 40,
                backgroundColor: Colors.white,
                height: 2,
                borderRadius: 8,
              },
              styleAnimated,
            ]}
          />
        </Box>
      </Box>
    )
  }

  const calculateCurrentIndex = (offsetX: number) => {
    const index = Math.round(offsetX / screenWidth)
    setCurrentIndex(index)
  }

  const handleScroll = event => {
    scrollTabX.value = event.nativeEvent.contentOffset.x
    translateX.value = withTiming(
      (event.nativeEvent.contentOffset.x * 80) / screenWidth,
      { duration: 0 },
    )
  }

  return (
    <Box marginTop={40}>
      {renderTabView()}
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToAlignment="center"
        pagingEnabled
        onScroll={handleScroll}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        <Playlist />
        <Album />
      </Animated.ScrollView>
    </Box>
  )
}

export default MusicTabView

const styles = StyleSheet.create({})

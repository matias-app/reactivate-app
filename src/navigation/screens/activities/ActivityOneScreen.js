import
{
  StyleSheet,
  Text,
  View,
  StatusBar,
  Vibration,
  Easing,
  TextInput,
  Animated,
  TouchableOpacity,
  FlatList,
  Platform,

} from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../../../global/tools'
import Stacks from '../../../global/stacks'

const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff'
}

const timers = [...Array(13).keys()].map(i => (i === 0 ? 1 : i * 5))
const ITEM_SIZE = windowWidth * 0.38
const ITEM_SPACING = (windowWidth - ITEM_SIZE) / 2

export default function ActivityOneScreen({ navigation })
{
  const scrollX = React.useRef(new Animated.Value(0)).current
  const [duration, setDuration] = React.useState(timers[0])
  const inputRef = React.useRef()
  const timerAnimation = React.useRef(new Animated.Value(windowHeight)).current
  const textInputAnimation = React.useRef(new Animated.Value(timers[0])).current
  const buttonAnimation = React.useRef(new Animated.Value(0)).current

  React.useEffect(() =>
  {
    const listener = textInputAnimation.addListener(({ value }) =>
    {
      console.log('value', value)
      inputRef?.current?.setNativeProps({
        text: Math.ceil(value).toString()
      })
    })

    return () =>
    {
      textInputAnimation.removeListener(listener)
      textInputAnimation.removeAllListeners()
    }
  })


  const animation = React.useCallback(() =>
  {
    textInputAnimation.setValue(duration)
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.parallel([
        Animated.timing(textInputAnimation, {
          toValue: 0,
          duration: duration * 1000,
          useNativeDriver: true
        }),
        Animated.timing(timerAnimation, {
          toValue: windowHeight,
          duration: duration * 1000,
          useNativeDriver: true
        }),
      ])

    ]).start(() =>
    {
      Vibration.cancel()
      Vibration.vibrate()
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    })
  }, [duration])

  const opacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  })

  const translateY = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  })

  const textOpacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })
  return (
    <>
      <View style={{ backgroundColor: colors.black, paddingHorizontal:10, 
    paddingTop: StatusBar.currentHeight +  + (Platform.OS=='ios' ? 55 : 0),}}>
        <TouchableOpacity onPress={() => { navigation.navigate(Stacks.Main) }}>
          <Text style={{ color: 'white', fontSize: 16 }}>{'<- Regresar al inicio'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject, {
              height: windowHeight,
              width: windowWidth,
              backgroundColor: 'red',
              transform: [{
                translateY: timerAnimation
              }]
            }
          ]}
        />
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject, {
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: 100,
              opacity,
              transform: [{
                translateY
              }]
            }
          ]}
        >
          <TouchableOpacity
            onPress={animation}
          >
            <View
              style={styles.roundButton}
            >
            </View>
          </TouchableOpacity>
        </Animated.View>
        <View
          style={{
            position: 'absolute',
            top: windowWidth / 3,
            left: 0,
            right: 0,
            flex: 1
          }}
        >
          <Animated.View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              opacity: textOpacity
            }}
          >
            <TextInput
              ref={inputRef}
              style={styles.text}
              defaultValue={duration.toString()}
              editable={false}
            />
          </Animated.View>
          <Animated.FlatList
            data={timers}
            keyExtractor={item => item.toString()}
            horizontal
            bounces={false}
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: { x: scrollX }
                }
              }], { useNativeDriver: true }
            )}
            onMomentumScrollEnd={ev =>
            {
              const index = Math.floor(ev.nativeEvent.contentOffset.x / ITEM_SPACING)
              setDuration(timers[index])
            }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            contentContainerStyle={{
              paddingHorizontal: ITEM_SPACING
            }}
            style={{ flexGrow: 0, opacity }}
            renderItem={({ item, index }) =>
            {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE
              ]

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [.4, 1, .4]
              })

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [.7, 1, .7]
              })
              return <View style={{ width: ITEM_SIZE, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Text style={[styles.text, {
                  opacity,
                  transform: [{
                    scale
                  }]
                }]}>
                  {item}
                </Animated.Text>
              </View>
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  roundButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: colors.red,
  },
  text: {
    fontSize: ITEM_SIZE * 0.8,
    fontFamily: 'Roboto',
    color: colors.text,
    fontWeight: '900',
  }
});
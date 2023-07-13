import { StyleSheet, Animated, View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { WelcomeInfo } from '../../../global/constants'
import { Image } from 'react-native'
import { windowHeight, windowWidth } from '../../../global/tools'
import Stacks from '../../../global/stacks'

const IconSize = '100%'
export default function Onboarding({ navigation })
{
    const flatListRef = React.useRef(null)

    useEffect(() =>
    {
        if (!flatListRef.current) return
        const timeout = 4800 / WelcomeInfo.length
        for (let i = 0; i < WelcomeInfo.length + 1; i++)
        {
            setTimeout(() =>
            {
                if (i === WelcomeInfo.length)
                {
                    setTimeout(() =>
                    {
                        handleContinue()
                    }, 200)
                } else
                {
                    flatListRef.current?.scrollToIndex({
                        index: i,
                        animated: true
                    })
                }
            }, timeout * i)
        }
    }, [flatListRef.current])

    const handleContinue = () =>
    {
        navigation.navigate(Stacks.Login)
    }

    return (
        <View
            style={styles.container}
        >
            <FlatList
                ref={flatListRef}
                data={WelcomeInfo}
                style={{ flex: 1 }}
                renderItem={RenderItem}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                bounces={false}
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                scrollEnabled={false}
                onScrollToIndexFailed={info =>
                {
                    const wait = new Promise(resolve => setTimeout(resolve, 500))
                    wait.then(() =>
                    {
                        flatListRef.current?.scrollToIndex({ index: info.index, animated: true })
                    })
                }
                }
            />

        </View>
    )
}

const RenderItem = ({ item }) =>
{
    return <View style={{
        flex: 1,
        width: windowWidth,
        height: windowHeight
    }}>
        <Image
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
            source={item.image}
            resizeMode='cover'
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})
import React, { FC } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { PanGestureHandler, PanGestureHandlerGestureEvent, RectButton } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


const Call: FC = () => {

    type ContextType = {
        translateX: number
        translateY: number
    }

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (event, ctx) => {
            ctx.translateX = translateX.value
            ctx.translateY = translateY.value
        },
        onActive: (event, ctx) => {
            translateX.value = event.translationX + ctx.translateX
            translateY.value = event.translationY + ctx.translateY
        }
    })

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value }
            ]
        }
    })

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='cover' style={styles.image} source={require('../assets/bg.png')}>
                <View style={styles.cameraArea}>
                    <PanGestureHandler onGestureEvent={panGestureEvent}>
                        <Animated.View style={[styles.camera, rStyle]} />
                    </PanGestureHandler>
                </View>
                <View style={styles.options}>
                    <RectButton style={styles.endCall}>
                        <Icon name='phone-alt' color='red' size={40} />
                    </RectButton>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    options: {
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cameraArea: {
        flex: 1,
        padding: 20
    },
    endCall: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,

        justifyContent: 'center',
        alignItems: 'center'
    },
    camera: {
        width: 80,
        height: 120,
        backgroundColor: 'red',
        borderRadius: 10
    }
})

export default Call
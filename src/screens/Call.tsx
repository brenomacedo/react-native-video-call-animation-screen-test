import React, { FC } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { PanGestureHandler, PanGestureHandlerGestureEvent, RectButton } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import useDimensions from '../hooks/useDimensions'


const Call: FC = () => {

    const Dimensions = useDimensions()

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
        },
        onEnd: () => {

            if(translateX.value > Dimensions.window.width - 120) {
                translateX.value = withSpring(Dimensions.window.width - 120, {
                    stiffness: 200,
                    damping: 15
                })
            }

            if(translateX.value < 0) {
                translateX.value = withSpring(0, {
                    stiffness: 200,
                    damping: 15
                })
            }

            if(translateY.value > Dimensions.window.height - 260) {
                translateY.value = withSpring(Dimensions.window.height - 260, {
                    stiffness: 200,
                    damping: 15
                })
            }

            if(translateY.value < 0) {
                translateY.value = withSpring(0, {
                    stiffness: 200,
                    damping: 15
                })
            }

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
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Blue = () => {
    return (
        <View style={styles.container} />
    )
}

export default Blue

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1
    }
})
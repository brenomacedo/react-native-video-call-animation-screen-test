import React from 'react'
import { StyleSheet, View } from 'react-native'

const Red = () => {
    return (
        <View style={styles.container} />
    )
}

export default Red

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    }
})
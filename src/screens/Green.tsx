import React from 'react'
import { StyleSheet, View } from 'react-native'

const Green = () => {
    return (
        <View style={styles.container} />
    )
}

export default Green

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1
    }
})
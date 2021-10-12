import React from 'react'
import { StyleSheet, View } from 'react-native'

const Yellow = () => {
    return (
        <View style={styles.container} />
    )
}

export default Yellow

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1
    }
})
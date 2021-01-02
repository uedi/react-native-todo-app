import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const Todos = () => {
    return (
        <View style={styles.container}>
            <Text>Todos</Text>
        </View>
    )
}

export default Todos
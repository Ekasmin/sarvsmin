import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Home({ navigation }) {
    return (
        <View style={styles.heading}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    heading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
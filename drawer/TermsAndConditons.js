import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function TermsAndConditons({ navigation }) {
    return (
        <View style={styles.heading}>
            <Text>Terms and Condtions</Text>
            <Text>Priivacy Policies</Text>
        </View>
    )
}

export default TermsAndConditons


const styles = StyleSheet.create({
    heading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function TermsAndConditions({ navigation }) {
    return (
        <View style={styles.heading}>
            <Text>Terms and Condtions</Text>
            <Text>Priivacy Policies</Text>
        </View>
    )
}

export default TermsAndConditions


const styles = StyleSheet.create({
    heading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

function TermsAndConditions({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.containerButton}>
                <Button style={styles.button} title="Go Back" onPress={e => navigation.goBack()} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textOne}>Terms and Condtions</Text>
                <Text style={styles.textTwo}>Privacy Policies</Text>
            </View>
        </SafeAreaView>
    )
}

export default TermsAndConditions


const styles = StyleSheet.create({
    containerButton: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 40,
        width: 100,
    },
    button: {
        fontSize: 18,
        padding: 10,
        paddingVertical: 20,
    },
    containerText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textOne: {
        marginBottom: 300,
    },
})
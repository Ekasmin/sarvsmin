import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function SuccessScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topView}>
                <IconFontAwesome style={styles.successIcon} name="check" size={40} />
                <Text style={styles.paymentSuccessText}>Payment Successful</Text>
            </View>

            <View style={styles.centerView}>
                <Text style={styles.paymentSuccessDesc}>Tempor anim nulla quis enim irure aliquip exercitation cillum. Non culpa ad labore.</Text>
            </View>

            <View style={styles.bottomView}>
                <Text style={styles.addCartText}>Continue Shopping</Text>
            </View>

        </SafeAreaView>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#81AA66',
    },
    topView: {
        marginTop: 100,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    paymentSuccessText: {
        fontSize: 30,
        marginTop: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    centerView: {
        marginHorizontal: 25,
        textAlign: 'center',
    },
    paymentSuccessDesc: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 200,
    },
    bottomView: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 50,
    },
    addCartText: {
        color: "#81AA66",
        fontWeight: 600,
        fontSize: 20,
    },
})
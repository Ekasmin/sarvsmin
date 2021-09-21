import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function SuccessScreen({ navigation }) {
    setTimeout(() => {
        navigation.navigate('OrderHistory')
    }, 3000);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topView}>
                <IconFontAwesome style={styles.successIcon} name="check" size={40} />
                <Text style={styles.paymentSuccessText}>Payment Successful</Text>
            </View>

            <View style={styles.centerView}>
                <Text style={styles.paymentSuccessDesc}>Thank you for shopping with us.</Text>
                <Text style={styles.paymentSuccessDesc}>We hope you would like our service.</Text>
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
})
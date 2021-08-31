import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function CardDetails() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topNav}>
                <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                <Text style={styles.navText}>Payment</Text>
            </View>

            <View style={styles.inputView}>
                <Text style={styles.textHeading}>Card Number</Text>
                <TextInput style={styles.inputField} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.textHeading}>Name on the Card</Text>
                <TextInput style={styles.inputField} />
            </View>

            {/* <View style={styles.lastRow}> */}
            <View style={styles.inputViewLastOne}>
                <Text style={styles.textHeading}>Valid Through (MM/YY)</Text>
                <TextInput style={styles.inputField} />
            </View>

            <View style={styles.inputViewLastTwo}>
                <Text style={styles.textHeading}>CVV</Text>
                <TextInput style={styles.inputField} />
            </View>
            {/* </View> */}

            <View style={styles.addCartButton}>
                <Text style={styles.addCartText}>Proceed to Payment</Text>
            </View>

        </SafeAreaView>
    )
}

export default CardDetails

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    topNav: {
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    navText: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 800,
    },
    inputView: {
        paddingLeft: 20,
        marginTop: 20,
    },
    textHeading: {
        fontSize: 18,
        fontWeight: 600,
    },
    inputField: {
        marginTop: 10,
        height: 40,
        borderWidth: 1,
        padding: 10,
        textTransform: "none",
        borderRadius: 5,
        width: "88vw",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        color: "black",
    },
    inputViewLastOne: {
        paddingLeft: 20,
        marginTop: 20,
    },
    inputViewLastTwo: {
        paddingLeft: 20,
        marginTop: 20,
    },
    lastRow: {
        flexDirection: 'row',
        width: 240,
    },
    // inputFieldLast: {
    //     marginTop: 10,
    //     height: 40,
    //     borderWidth: 1,
    //     padding: 10,
    //     textTransform: "none",
    //     borderRadius: 5,
    //     width: "100%",
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 1 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 1,
    //     elevation: 5,
    //     color: "black",
    // },
    addCartButton: {
        marginTop: 30,
        backgroundColor: "#2D9CDB",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
    },
    addCartText: {
        color: "#fff",
        fontWeight: 600,
        fontSize: 20,
    },
})

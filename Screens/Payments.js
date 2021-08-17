import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import WalletSection from './WalletSection';

function Payments() {
    // function WalletSection() {
    //     return (
    //         <View style={styles.hr}>
    //             <Image style={styles.walletImage} source={{ uri: require("../assets/gpay-logo.png") }} />
    //             <Text style={styles.walletText}>Google Pay</Text>
    //         </View>
    //     )
    // }

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                <Text style={styles.navText}>Payment</Text>
            </View>

            <View>
                <Text style={styles.payTypeHeading}>Wallets</Text>
                <WalletSection logo="gpay-logo" text="Google Pay" />
                <WalletSection logo="amazon-logo" text="Amazon Pay" />
                <WalletSection logo="paytm-logo" text="Paytm" />
                <WalletSection logo="phonepe" text="Phone Pe" />
            </View>

            <View>
                <Text style={styles.payTypeHeading}>Credit/Debit Cards</Text>
                <View style={styles.cardContainer}>
                    <IconFontAwesome style={styles.addQuantityIcon} name="plus-circle" size={30} />
                    <View style={styles.cardText}>
                        <Text style={styles.cardHeadingOne}>Add New Card</Text>
                        <Text style={styles.cardHeadingTwo}>Save and Pay via Cards.</Text>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default Payments

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    topNav: {
        marginTop: 30,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    navText: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 700,
    },
    payTypeHeading: {
        fontSize: 18,
        fontWeight: 700,
        marginLeft: 20,
        marginTop: 30,
    },
    cardContainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10,
    },
    cardText: {
        marginLeft: 20,
    },

})

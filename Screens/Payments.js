import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import WalletSection from './WalletSection';

function Payments() {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                <Text style={styles.navText}>Payment</Text>
            </View>

            <View>
                <Text style={styles.payTypeHeading}>Wallets</Text>
                <WalletSection logo="gpay-logo" text="Google Pay" />
                <WalletSection logo="amazon-pay-logo" text="Amazon Pay" />
                <WalletSection logo="paytm-logo" text="Paytm" />
                <WalletSection logo="upi-logo" text="UPI" />
            </View>

            <View style={styles.DebitCardView}>
                <Text style={styles.payTypeHeading}>Credit/Debit Cards</Text>
                <View style={styles.cardContainer}>
                    <IconFontAwesome style={styles.addQuantityIcon} name="plus-circle" size={30} />
                    <View style={styles.cardText}>
                        <Text style={styles.cardHeadingOne}>Add New Card</Text>
                        <Text style={styles.cardHeadingTwo}>Save and Pay via Cards.</Text>
                        <View style={styles.cardLogo}>
                            <Image style={styles.debitCardImage} source={{ uri: require(`../assets/matercard-logo.png`) }} />
                            <Image style={styles.debitCardImage} source={{ uri: require(`../assets/visa-logo.png`) }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.netBankingView}>
                <Text style={styles.payTypeHeading}>Netbanking</Text>
                <View style={styles.netBankingAvatars}>
                    <Image style={styles.netBankingImage} source={{ uri: require(`../assets/hdfc-logo.png`) }} />
                    <Image style={styles.netBankingImage} source={{ uri: require(`../assets/icici-logo.png`) }} />
                    <Image style={styles.netBankingImage} source={{ uri: require(`../assets/sbi-logo.png`) }} />
                    <Image style={styles.netBankingImage} source={{ uri: require(`../assets/axis-logo.png`) }} />
                    <IconFontAwesome style={styles.addQuantityIcon} name="plus-circle" size={30} />
                </View>
            </View>

            <View style={styles.payOnDeliveryView}>
                <Text style={styles.payTypeHeading}>Pay on Delivery</Text>
                <Text style={styles.payOnDeliveryText}>Pay Cash/Card on Delivery of the product</Text>
            </View>

            <View style={styles.addCartButton}>
                <Text style={styles.addCartText}>Add To Bag</Text>
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
        marginBottom: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    navText: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 700,
    },
    DebitCardView: {
        marginTop: 30,
    },
    payTypeHeading: {
        fontSize: 18,
        fontWeight: 700,
        marginLeft: 20,
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: "row",
        paddingLeft: 20,
        padding: 10,
        backgroundColor: "white",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderTopColor: "black",
        borderTopWidth: 1,
    },
    cardText: {
        marginLeft: 20,
    },
    cardHeadingOne: {
        fontSize: 18,
        fontWeight: 700,
    },
    cardLogo: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 0,
    },
    debitCardImage: {
        height: 20,
        width: 50,
    },
    netBankingView: {
        marginTop: 30,
    },
    netBankingAvatars: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 15,
        backgroundColor: "white",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderTopColor: "black",
        borderTopWidth: 1,
    },
    netBankingImage: {
        height: 40,
        width: 40,
        marginHorizontal: 10,
    },
    addQuantityIcon: {
        marginLeft: 10,
    },
    payOnDeliveryView: {
        marginTop: 30,
    },
    payOnDeliveryText: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        padding: 20,
        backgroundColor: "white",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderTopColor: "black",
        borderTopWidth: 1,
    },
    addCartButton: {
        marginTop: 30,
        backgroundColor: "#2D9CDB",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 5,
    },
    addCartText: {
        color: "#fff",
        fontWeight: 600,
        fontSize: 20,
    },
})

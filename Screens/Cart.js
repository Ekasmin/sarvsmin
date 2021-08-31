import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CartItem from './CartItem';


function Cart() {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                    <Text style={styles.navText}>Your Bag</Text>
                </View>

                <View style={styles.rightNavRow}>
                    <IconFontAwesome style={styles.wishListIcon} name="heart-o" size={26} />
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </ScrollView>


            <View style={styles.priceOptions}>
                <Text style={styles.totalText}>TOTAL:</Text>
                <Text style={styles.priceText}>Rs. 2,000</Text>
            </View>

            <View style={styles.addCartButton}>
                <Text style={styles.addCartText}>Add To Bag</Text>
            </View>


        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    topNav: {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    leftNavRow: {
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    navText: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 800,
    },
    rightNavRow: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    wishListIcon: {
        marginRight: 30,
    },
    priceOptions: {
        flexDirection: "row",
        marginLeft: 20,
    },
    totalText: {
        fontWeight: 400,
        fontSize: 14,
        color: "black",
    },
    priceOptions: {
        marginTop: 10,
    },
    priceText: {
        fontWeight: 600,
        fontSize: 24,
        color: "#27AE60",
        marginLeft: 10,
    },
    addCartButton: {
        backgroundColor: "#2D9CDB",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 5,
        margin: 18,
        marginTop: 15,
    },
    addCartText: {
        color: "#fff",
        fontWeight: 600,
        fontSize: 20,
    },
})

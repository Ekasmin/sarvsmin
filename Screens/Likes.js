import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ShoppingCartIcon } from '@heroicons/react/solid'
import CartItem from './CartItem';
import { DrawerActions } from '@react-navigation/native';


function Likes({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    {/* <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} onPress={() => navigation.goBack()} /> */}
                    <IconFontAwesome name="navicon" style={styles.navIcon} size={30} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                    <Text style={styles.navText}>Your Favorites</Text>
                </View>

                <View style={styles.rightNavRow}>
                    <IconFontAwesome5 style={styles.shoppingCartIcon} name="shopping-cart" size={20} onClick={e => navigation.navigate('Cart')} />
                    {/* <ShoppingCartIcon className="w-16 h-16" /> */}
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

        </SafeAreaView>
    )
}

export default Likes

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
    shoppingCartIcon: {
        marginRight: 30,
    },
    priceOptions: {
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 10,
    },
    totalText: {
        fontWeight: 400,
        fontSize: 14,
        color: "black",
    },
    priceText: {
        fontWeight: 600,
        fontSize: 24,
        color: "#27AE60",
        marginLeft: 8,
        marginTop: 10,
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

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function CartItem({ itemName, itemStatusIcon, itemStatus, itemStatusDate }) {
    return (
        <View style={styles.cartItem}>
            <Image style={styles.image} source={{ uri: "https://images.pexels.com/photos/7045701/pexels-photo-7045701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} />

            <View style={styles.middleInfo}>
                <Text style={styles.itemCompany}>Company Name</Text>
                <Text style={styles.itemName}>{itemName}</Text>
                <View style={styles.itemStatusView}>
                    <IconFontAwesome style={styles.iconFontAwesome} name={itemStatusIcon} size="20" />
                    <View style={styles.itemStatusText}>
                        <Text style={styles.itemStatus}>{itemStatus}</Text>
                        <Text style={styles.itemStatusDate}>{itemStatusDate}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightInfo}>
                <Text style={styles.itemDetails}>Details</Text>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: "row",
        margin: 20,
        marginTop: 10,
        padding: 10,
        backgroundColor: "white",
    },
    image: {
        height: 70,
        width: 90,
        resizeMode: "contain",
    },
    middleInfo: {
        marginLeft: 15,
    },
    itemCompany: {
        fontWeight: 700,
        fontSize: 10,
        color: "#9F9B95",
        marginBottom: 3,
    },
    itemName: {
        fontWeight: 600,
        fontSize: 18,
        color: "black",
        marginBottom: 3,
    },
    itemPrice: {
        fontWeight: 500,
        fontSize: 14,
        color: "#27AE60",
    },
    rightInfo: {
        alignItems: "center",
        position: "absolute",
        right: 20,
    },
    itemDetails: {
        marginVertical: 2,
        color: "red",
        fontWeight: 400,
        fontSize: 12,
    },
    itemStatusView: {
        flexDirection: "row",
        height: 40,
        alignItems: "flex-start",
    },
    iconFontAwesome: {
        marginTop: 3,
        marginRight: 10,
    },
    itemStatus: {
        fontSize: 13,
    },
    itemStatusDate: {
        fontSize: 13,
    },
})

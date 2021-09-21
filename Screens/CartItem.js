import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function CartItem({ comp }) {
    return (
        <View style={styles.cartItem}>
            <Image style={styles.image} source={{ uri: "https://images.pexels.com/photos/7045701/pexels-photo-7045701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} />

            <View style={styles.middleInfo}>
                <Text style={styles.itemCompany}>Company Name</Text>
                <Text style={styles.itemName}>Item Name</Text>
                <Text style={styles.itemPrice}>Price</Text>
            </View>

            {{ comp } == "Cart"
                ? <View style={styles.rightInfo}>
                    <IconFontAwesome style={styles.addQuantityIcon} name="plus-circle" size={20} />
                    <Text style={styles.itemCount}>01</Text>
                    <IconFontAwesome style={styles.minusQuantityIcon} name="minus-circle" size={20} />
                </View>
                : <View style={styles.rightInfo}>
                    <IconFontAwesome style={styles.share} name="share-alt" size={20} />
                    <Text style={styles.addToCart}>Add To Cart</Text>
                </View>
            }
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
    itemCount: {
        marginVertical: 2,
    },
    rightInfo: {
        alignItems: "center",
        position: "absolute",
        right: 20,
        bottom: 10,
    },
    share: {
        position: "absolute",
        right: 0,
        top: -50,
    },
    addToCart: {
        color: "orange",
        fontWeight: 700,
    },
})

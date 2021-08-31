import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function AddressItem({ addressDesc, addressInfoOne, addressInfoTwo }) {
    return (
        <View style={styles.cartItem}>

            <View style={styles.middleInfo}>
                <Text style={styles.addressDesc}>{addressDesc}</Text>
                <Text style={styles.addressInfo}>{addressInfoOne}</Text>
                <Text style={styles.addressInfo}>{addressInfoTwo}</Text>
            </View>

            <View style={styles.rightInfo}>
                <Text style={styles.addressUpdate}>Update</Text>
            </View>
        </View>
    )
}

export default AddressItem

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: "row",
        margin: 20,
        marginTop: 10,
        padding: 10,
        backgroundColor: "white",
    },
    middleInfo: {
        marginLeft: 15,
    },
    addressDesc: {
        color: "black",
        fontWeight: 800,
        fontSize: 16,
        marginBottom: 2,
    },
    addressInfo: {
        fontWeight: 400,
        fontSize: 13,
    },
    rightInfo: {
        alignItems: "center",
        position: "absolute",
        right: 20,
    },
    addressUpdate: {
        color: "orange",
        fontWeight: 700,
    },
})

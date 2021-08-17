import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, ScrollView, Dimensions, Text, Button } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function SingleItemPage() {

    // const images = [
    //     "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    //     "https://images.pexels.com/photos/7045701/pexels-photo-7045701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    // ]

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                </View>
                <View style={styles.rightNavRow}>
                    <IconFontAwesome style={styles.wishListIcon} name="heart-o" size={26} />
                    <IconFontAwesome style={styles.shareIcon} name="share" size={26} />
                </View>
            </View>

            <Image style={styles.images} source={{ uri: "https://images.pexels.com/photos/7045701/pexels-photo-7045701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} />

            <View style={styles.itemInfo}>
                <Text style={styles.itemCompany}>Company Name</Text>

                <Text style={styles.itemName}>Item Name</Text>

                <Text style={styles.itemDesc}>
                    Dolor amet culpa consequat aliqua eu ea dolor Lorem. Elit eiusmod excepteur pariatur ex irure consectetur cillum anim duis consequat. Nisi aute nisi irure aliqua cupidatat dolore. Proident enim Lorem Lorem tempor cupidatat irure Lorem id laboris occaecat ea minim. Fugiat commodo commodo ipsum dolore mollit ut duis labore fugiat ex.
                </Text>

                <View style={styles.toggleCount}>
                    <IconFontAwesome style={styles.minusQuantityIcon} name="minus-circle" size={30} />
                    <Text style={styles.itemCount}>01</Text>
                    <IconFontAwesome style={styles.addQuantityIcon} name="plus-circle" size={30} />
                </View>

                <View style={styles.hr} />

                <View style={styles.bottomOptions}>
                    <View style={styles.priceOptions}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.priceText}>Rs. 2,000</Text>
                    </View>

                    <View style={styles.addCartButton}>
                        <Text style={styles.addCartText}>Add To Bag</Text>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default SingleItemPage

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    topNav: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    leftNavRow: {
        marginLeft: 20,
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
    shareIcon: {
        marginRight: 25,
    },
    images: {
        height: 250,
        marginTop: 50,
        resizeMode: "contain",
        marginBottom: 40,
    },
    itemInfo: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        flex: 1,
    },
    itemCompany: {
        fontWeight: 700,
        fontSize: 16,
        color: "#9F9B95",
        marginLeft: 20,
        marginTop: 20,
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#2D9CDB",
        marginLeft: 20,
        marginTop: 10,
    },
    itemDesc: {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 300,
        color: "smokewhite",
    },
    toggleCount: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 20,
        alignItems: "center",
    },
    itemCount: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#7d827d",
        marginHorizontal: 10,
    },
    hr: {
        borderBottomColor: '#E6E6EA',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 20,
    },
    bottomOptions: {
        flexDirection: "row",
        marginLeft: 20,
    },
    priceOptions: {
        marginRight: 25,
    },
    totalText: {
        fontWeight: 400,
        fontSize: 16,
        color: "#9F9B95",
    },
    priceText: {
        fontWeight: 800,
        fontSize: 24,
        color: "#27AE60",
    },
    addCartButton: {
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

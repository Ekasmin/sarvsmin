import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
    TextInput,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

//  Created a product screen to render the products when they get pressed
//  And a Profile Screen to render the details of the user


function Product({ navigation }) {

    const [searchText, setsearchText] = useState();

    const images = ["logo", "bg-1"];
    const { width } = Dimensions.get("window")
    const height = width * 100 / 60   //60%
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topNav}>

                <IconFontAwesome name="navicon" style={styles.navIcon} size={30} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

                <View style={styles.search}>
                    <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChange={e => setsearchText(e.target.value)} underlineColorAndroid='transparent' />
                    <IconFontAwesome style={styles.searchIcon} name="search" size={20} />
                </View>

            </View>

            <ScrollView style={styles.scrollView}>

                <Image style={styles.image} source={require('../assets/logo.jpg')} />

                {/* <ScrollView horizontal style={styles.image}>
                    {images.map((image, index) => (
                        <Image key={index} source={require(`../assets/${image}.jpg`)} />
                    ))}
                </ScrollView> */}

                <View style={styles.productDetails}>
                    <Text style={styles.textName}>Product Name</Text>
                    <Text style={styles.textPrice}>Price</Text>
                    <Text style={styles.textDeliveryCharge}>Delivery Charge</Text>
                    <Text style={styles.textOverview}>Overview</Text>
                    <Text style={styles.textStars}>Stars</Text>
                    <Text style={styles.textReviews}>Reviews</Text>

                </View>

                <View style={styles.reviewContainer}>

                    <View style={styles.reviewHeader}>
                        <Text style={styles.textCustomerName}>Customer Name</Text>
                        <Text style={styles.textStarsReview}>Stars</Text>
                    </View>

                    <Text style={styles.textReview}>Content</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    topNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    navIcon: {
        position: "absolute",
        left: 18,
        resizeMode: 'contain',
    },
    search: {
        flexDirection: "row",
        margin: 15,
        height: 40,
        width: "80%",
        marginLeft: 60,
        borderRadius: 15,
        postion: "absolute",
        border: "1px solid black",
        backgroundColor: "#F5F5F5",
    },
    searchInput: {
        height: 30,
        position: "relative",
        left: 10,
        top: 5,
        width: "90%",
        fontSize: 18,
        paddingLeft: 10,
        // Remove outlines from TextInput
        outlineColor: "#F5F5F5",
        outlineOffset: 0,
        outlineStyle: "none",
        outlineWidth: 0,
    },
    searchIcon: {
        position: "absolute",
        color: "black",
        top: 7,
        right: 25,
    },
    scrollView: {
        flex: 1,
    },
    image: {
        marginTop: 10,
        height: 240,
        width: 200,
        maxHeight: 260,
        maxWidth: 250,
        alignSelf: "center",
    },
    productDetails: {
        paddingLeft: 20,
    },
    textName: {
        marginTop: 40,
        fontSize: 20,
    },
    textPrice: {
        marginTop: 10,
        fontSize: 20,
    },
    textDeliveryCharge: {
        marginTop: 10,
        fontSize: 20,
    },
    textOverview: {
        marginTop: 10,
        fontSize: 20,
    },
    textStars: {
        marginTop: 10,
        fontSize: 20,
    },
    textReviews: {
        marginTop: 10,
        fontSize: 20,
    },
    reviewContainer: {
        flex: 1,
        height: 200,
        width: 450,
        marginLeft: 20,
        marginTop: 20,
        border: "1px solid black",
        borderRadius: 10,
        backgroundColor: "whitesmoke"
    },
    reviewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
    },
    textCustomerName: {
        fontSize: 20,
    },
    textStarsReview: {
        marginRight: 20,
        fontSize: 18,
    },
    textReview: {
        margin: 15,
        fontSize: 20,
    },
});
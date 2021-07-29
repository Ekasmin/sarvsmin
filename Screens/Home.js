import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ListHorizontal, { ListVertical } from '../ListItems/HomeList';

function Home({ navigation }) {
    const [searchText, setsearchText] = useState();

    const Item = ({ title, price, validity, image, rating }) => {
        return (
            <View style={styles.item}>
                <View style={styles.ImageRating}>
                    <Image style={styles.itemImage} source={{
                        uri: `${image}`,
                    }} />
                    {/* {Array({ rating }).fill().map((_) => (<Text style={styles.rating}>⭐</Text>))} */}
                    <Text style={styles.rating}>Ratings </Text>
                </View>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemPrice}>
                    {price.split(".")[0]}.{price.split(".")[1]}
                </Text>
                {validity === true ?
                    <Text style={{ color: "blue", position: "absolute", bottom: 20, }}>In Stock</Text> :
                    <Text style={{ color: "red", position: "absolute", bottom: 20, }}>Out of Stock</Text>
                }
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <Item title={item.title} price={item.price} validity={item.validity} image={item.image} />
    );

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <IconFontAwesome name="navicon" style={styles.navIcon} size={30} onPress={(e) => navigation.openDrawer(e)} />
                <Text style={styles.navtext}>EKASMIN</Text>
            </View>

            <View style={styles.search}>
                <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChange={e => setsearchText(e.target.value)} underlineColorAndroid='transparent' />
                <IconFontAwesome style={styles.searchIcon} name="search" size={20} />
            </View>

            <ScrollView>
                <ListHorizontal ListTitle="Products" renderItem={renderItem} />
                <ListHorizontal ListTitle="Offers" renderItem={renderItem} />

                <ListVertical renderItem={renderItem} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    topNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    navIcon: {
        position: "absolute",
        left: -18,
        resizeMode: 'contain',
        margin: 15,
        marginLeft: 20,
    },
    navtext: {
        fontSize: 20,
        fontWeight: 500,
    },
    search: {
        flexDirection: "row",
        margin: 15,
        height: 40,
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
        width: "80%",
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
    item: {
        backgroundColor: '#fff',
        padding: 20,
        paddingVertical: 20,
        marginRight: 20,
        borderRadius: 15,
        width: 250,
        height: 220,
    },
    ImageRating: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    rating: {
        marginLeft: 20,
        marginTop: 20,
    },
    itemImage: {
        width: 100,
        height: 80,
        border: '1px solid black',
        borderRadius: 15,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: 600,
        marginTop: 10,
        width: 130,
    },
    itemPrice: {
        marginBottom: 8,
        position: "absolute",
        bottom: 40,
    },
    itemPriceMain: {
        fontWeight: 600,
    },
})
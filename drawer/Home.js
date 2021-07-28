import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Data from "../data/catalogue";

function Home({ navigation }) {
    const [searchText, setsearchText] = useState();
    // const [items, setItems] = useState(Data);

    // const renderItem = ({ id, title, price, validity, image }) => (
    //     <View>
    //         <Text style={styles.text}>{title}</Text>
    //         <Text style={styles.text}>{price}</Text>
    //     </View>
    // );

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <IconFontAwesome name="navicon" style={styles.navIcon} size={30} onPress={() => navigation.toggleDrawer()} />
                <Text style={styles.navtext}>EKASMIN</Text>
            </View>

            <View style={styles.search}>
                <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChange={e => setsearchText(e.target.value)} underlineColorAndroid='transparent' />
                <IconFontAwesome style={styles.searchIcon} name="search" size={20} />
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    style={styles.flatlist}
                    data={Data}
                    renderItem={({ item }) => <Text>{item.id}</Text>}
                    keyExtractor={item => item.id}
                />
            </View>
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
    listContainer: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    flatlist: {
        marginHorizontal: 20,
        backgroundColor: '#f11200',
        padding: 10,
    },
    text: {
        fontSize: 20,
    }
})

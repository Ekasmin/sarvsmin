import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function Profile({ navigation }) {
    const [searchText, setsearchText] = useState();
    return (
        // <SafeAreaView style={styles.safeArea}>
        //     <View style={styles.topNav}>
        //         <IconFontAwesome name="navicon" style={styles.navIcon} size={30} onPress={() => navigation.openDrawer()} />
        //         <Text style={styles.navtext}>PROFILE</Text>
        //     </View>

        //     <View style={styles.search}>
        //         <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChange={e => setsearchText(e.target.value)} underlineColorAndroid='transparent' />
        //         <IconFontAwesome style={styles.searchIcon} name="search" size={20} />

        //     </View>
        // </SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default Profile

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
})
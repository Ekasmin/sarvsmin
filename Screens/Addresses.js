import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import AddressItem from './AddressItem';

function Addresses({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} onPress={() => navigation.goBack()} />
                    <Text style={styles.navText}>Addresses</Text>
                </View>
            </View>

            <AddressItem addressDesc="Home" addressInfoOne="Street Name" addressInfoTwo="City, State" />
            <AddressItem addressDesc="Office" addressInfoOne="Street Name" addressInfoTwo="City, State" />
            <AddressItem addressDesc="Other" addressInfoOne="Street Name" addressInfoTwo="City, State" />
            <AddressItem addressDesc="Mr Pratap" addressInfoOne="Street Name" addressInfoTwo="City, State" />
        </SafeAreaView>
    )
}

export default Addresses

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
})

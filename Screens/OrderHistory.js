import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import OrderItem from './OrderItem';

function OrderHistory() {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                    <Text style={styles.navText}>Your Bag</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <OrderItem itemName="Item 1 - Lorem" itemStatusIcon="clock-o" itemStatus="On the Way" itemStatusDate="Expected on Fri, 25 Jun" />

                <OrderItem itemName="Item 2 - Lorem" itemStatusIcon="check" itemStatus="Delivered" itemStatusDate="on Fri, 25 Jun" />

                <OrderItem itemName="Item 3 - Lorem" itemStatusIcon="arrow-circle-o-up" itemStatus="Returned" itemStatusDate="on Fri, 25 Jun" />

                <OrderItem itemName="Item 4 - Lorem" itemStatusIcon="remove" itemStatus="Cancelled" itemStatusDate="on Fri, 25 Jun" />

            </ScrollView>


        </SafeAreaView>
    )
}

export default OrderHistory

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
})

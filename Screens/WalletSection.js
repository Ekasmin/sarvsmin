import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function WalletSection({ logo, text }) {
    return (
        <View style={styles.hr}>
            <Image style={styles.walletImage} source={{ uri: require(`../assets/${logo}.png`) }} />
            <Text style={styles.walletText}>{text}</Text>
        </View>
    )
}

export default WalletSection

const styles = StyleSheet.create({
    hr: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderTopColor: '#000',
        borderTopWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    walletImage: {
        height: 20,
        width: 50,
    },
    walletText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 500,
    },
})

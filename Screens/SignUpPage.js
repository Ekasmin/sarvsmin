import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function SignUpPage({ navigation }) {
    return (
        <SafeAreaView style={styles.signUpPage}>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />

            <Text style={styles.heading}>Sign Up</Text>


            <View style={styles.buttonContainer}>
                <Text style={styles.buttonOne}> <Icon name="facebook" color="white" size={15} /> {" "} Connect with Facebook</Text>

                <Text style={styles.buttonTwo} onClick={e => navigation.navigate("SignUpForm")}>I'll use email or phone</Text>
            </View>

            <View style={styles.socialIcons}>
                <Icon style={styles.icon} name="twitter-square" color="#1DA1F2" size={25} />
                <Icon style={styles.icon} name="google-plus" color="#DB4A39" size={25} />
                <Icon style={styles.icon} name="linkedin-square" color="#0E76A8" size={25} />
            </View>
            <View style={styles.container__footer}>
                <Text style={styles.footerText}>Already have an account?<Text style={styles.footerText__signUp} onClick={e => navigation.navigate("Login")}> Login</Text></Text>
            </View>

        </SafeAreaView>
    )
}

export default SignUpPage

const styles = StyleSheet.create({
    signUpPage: {
        flex: 1,
        display: "grid",
        placeItems: "center",
        backgroundColor: "white",
    },
    logo: {
        marginTop: 60,
        resizeMode: "contain",
        width: 200,
        height: 160,
    },
    heading: {
        fontSize: 35,
        fontWeight: "bold",
    },
    buttonContainer: {
        height: 90,
        justifyContent: "space-between",
        marginTop: -40,
    },
    buttonOne: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        width: 220,
        backgroundColor: "#0000FF",
        borderRadius: 25,
        color: "#fff",
        textAlign: "center",
        alignItems: "center",
    },
    buttonTwo: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 25,
        border: "1px solid black",
        textAlign: "center",
    },
    socialIcons: {
        flexDirection: "row",
        width: 120,
        justifyContent: "space-between",
    },
    container__footer: {
        marginTop: -130,
    },
    footerText: {
        fontSize: "15px",
    },
    footerText__signUp: {
        color: "blue",
        cursor: "pointer",
    },
})
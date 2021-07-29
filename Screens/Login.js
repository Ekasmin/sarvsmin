import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Login({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        if (!email || !password) {
            alert('Please fill the required details')
        }
        else {
            navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container__heading}>
                <Text style={styles.headingOne}>EKASMIN</Text>
                <Text style={styles.headingTwo}>Login</Text>
            </View>
            <View style={styles.container__inputs}>
                <TextInput style={styles.inputs} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <TextInput style={styles.inputs} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </View>
            <View style={styles.container__buttons}>
                <TouchableOpacity style={styles.buttonsOne}><Text style={styles.buttons__text} onClick={e => handleLogin(e)}>Login</Text></TouchableOpacity>
                {/* <TouchableOpacity style={styles.buttonsTwo}><Text style={styles.buttons__text}>Cancel</Text></TouchableOpacity> */}
            </View>
            <View style={styles.container__footer}>
                <Text style={styles.footerText}>Don't have an account?
                    <Text style={styles.footerText__signUp} onClick={e => navigation.navigate('Register')}> Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    safeArea: {
        display: "grid",
        placeItems: "center",
    },
    container__heading: {
        margin: "20px",
        flex: 1,
        alignItems: "center",
        margin: "10px",
        marginTop: "10vh",
    },
    headingOne: {
        fontSize: "32px",
        padding: "5px",
        fontWeight: 600,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: "10px",
    },
    headingTwo: {
        fontSize: "28px",
        fontWeight: 400,
        marginTop: "10px",
    },
    container__inputs: {
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "25px",
    },
    inputs: {
        height: "50px",
        border: "1px solid black",
        padding: "10px",
        outline: "none",
        textTransform: "none",
        borderRadius: "5px",
        marginTop: "25px",
        width: "75vw",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
    },
    container__buttons: {
        flexDirection: "row",
        textAlign: "center",
        width: "75vw",
        justifyContent: "space-around",

    },
    buttonsOne: {
        margin: "10px",
        padding: "20px",
        paddingLeft: "30px",
        paddingRight: "30px",
        border: "0.5px solid #059862",
        width: "140px",
        backgroundColor: "#059862",
        borderRadius: "10px",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonsTwo: {
        margin: "10px",
        padding: "20px",
        paddingLeft: "30px",
        paddingRight: "30px",
        border: "0.5px solid #F51720",
        width: "140px",
        borderRadius: "10px",
        backgroundColor: "#F51720",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttons__text: {
        fontSize: "18px",
        fontWeight: 600,
    },
    container__footer: {
        marginTop: "30px",
    },
    footerText: {
        fontSize: "15px",
    },
    footerText__signUp: {
        textDecorationLine: 'underline',
        color: "blue",
        cursor: "pointer",
    },
});

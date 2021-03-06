import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox, ScrollView, Image } from 'react-native';
import TextField from '@material-ui/core/TextField';

function Login({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const CheckboxSelection = (e) => {
        isSelected === true ? setIsSelected(false) : setIsSelected(true);
    }

    const handleLogin = (e) => {
        if (!email || !password) {
            alert('Please fill the required details')
        }
        else {
            navigation.navigate('HomeTabs')
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.container__heading}>
                    <Image style={styles.headingBackground} source={require("../assets/auth_background.svg")} />
                    <Text style={styles.headingOne}>Welcome Back,</Text>
                    <Text style={styles.headingTwo}>Log in!</Text>
                </View>
                <View style={styles.centerBox}>
                    <View style={styles.container__inputs}>
                        <TextField
                            // style={styles.inputs}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="E-mail"
                            // color="secondary"
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                        />
                        <br />
                        <TextField
                            // style={styles.inputs}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            // color="secondary"
                            variant="outlined"
                            type="password"
                            required
                        />
                        <View style={styles.rememberMe}>
                            <CheckBox
                                value={isSelected}
                                onChange={e => CheckboxSelection(e)}
                            />
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </View>
                    </View>

                    <View style={styles.container__button}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.button__text} onClick={e => handleLogin(e)}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container__footer}>
                        <Text style={styles.footerText}>Don't have an account?
                            <Text style={styles.footerText__signUp} onClick={e => navigation.navigate('SignUpForm')}> Sign Up</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    container__heading: {
        margin: 20,
        marginLeft: 30,
        marginTop: 40,
        position: "relative",
    },
    headingBackground: {
        height: 300,
        width: 400,
        position: "absolute",
        zIndex: -1,
        marginLeft: -130,
        marginTop: -60,
    },
    headingOne: {
        marginTop: 45,
        fontSize: 16,
        padding: 5,
        fontWeight: 400,
        color: "white",
    },
    headingTwo: {
        fontSize: 40,
        padding: 5,
        fontWeight: 600,
        marginBottom: 60,
        color: "white",
    },
    centerBox: {
        display: "grid",
        placeItems: "center",
    },
    centerBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    container__inputs: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 25,
    },
    inputs: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        // outline: "none",
        textTransform: "none",
        borderRadius: 5,
        marginTop: 25,
        width: "75vw",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
    },
    rememberMe: {
        flexDirection: 'row',
        textAlign: "left",
        marginTop: 20,
        marginLeft: 5,
        position: "relative",
        width: "75vw",
        alignItems: "center",
    },
    rememberMeText: {
        marginLeft: 5,
    },
    forgotPassword: {
        position: "absolute",
        right: 10,
    },
    container__button: {
        flexDirection: "row",
        textAlign: "center",
        width: "75vw",
        justifyContent: "space-around",

    },
    button: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 0.5,
        borderColor: "#0066FF",
        width: 140,
        color: "white",
        backgroundColor: "#0066FF",
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    button__text: {
        fontSize: 18,
        fontWeight: 600,
        color: "white",
    },
    container__footer: {
        marginTop: 30,
    },
    footerText: {
        fontSize: 15,
    },
    footerText__signUp: {
        // textDecorationLine: 'underline',
        color: "blue",
        cursor: "pointer",
    },
});

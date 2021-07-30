import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox } from 'react-native';
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
            navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container__heading}>
                <Text style={styles.headingOne}>Welcome Back,</Text>
                <Text style={styles.headingTwo}>Log in!</Text>
            </View>
            <View style={styles.centerBox}>
                <View style={styles.container__inputs}>
                    <TextField
                        // style={styles.inputs}
                        value={email}
                        onChangeText={(e) => setEmail(e.target.value)}
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
                        onChangeText={(e) => setPassword(e.target.value)}
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
                <View style={styles.container__buttons}>
                    <TouchableOpacity style={styles.buttonsOne}><Text style={styles.buttons__text} onClick={e => handleLogin(e)}>Login</Text></TouchableOpacity>
                    {/* <TouchableOpacity style={styles.buttonsTwo}><Text style={styles.buttons__text}>Cancel</Text></TouchableOpacity> */}
                </View>
                <View style={styles.container__footer}>
                    <Text style={styles.footerText}>Don't have an account?
                        <Text style={styles.footerText__signUp} onClick={e => navigation.navigate('Register')}> Sign Up</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container__heading: {
        margin: "20px",
        marginLeft: "20px",
        marginTop: "80px",
    },
    headingOne: {
        fontSize: "22px",
        padding: "5px",
        fontWeight: 400,
    },
    headingTwo: {
        fontSize: "32px",
        padding: "5px",
        fontWeight: 600,
        marginBottom: "40px",
    },
    centerBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
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
    container__buttons: {
        flexDirection: "row",
        textAlign: "center",
        width: "75vw",
        justifyContent: "space-around",

    },
    buttonsOne: {
        margin: "10px",
        paddingVertical: "10px",
        paddingHorizontal: "20px",
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
        // textDecorationLine: 'underline',
        color: "blue",
        cursor: "pointer",
    },
});

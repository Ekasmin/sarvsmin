import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox } from 'react-native';

function Register({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const [isSelected, setIsSelected] = useState(false);

    const CheckboxSelection = (e) => {
        isSelected === true ? setIsSelected(false) : setIsSelected(true);
    }

    const handleLogin = () => {
        if (!email || !password || !rePassword || !phoneNumber || !isSelected) {
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
                <Text style={styles.headingTwo}>Register</Text>
            </View>
            <View style={styles.container__inputs}>
                <TextInput style={styles.inputs} keyboardType="email-address" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} value={password} onChange={e => setPassword(e.target.value)} />
                <TextInput style={styles.inputs} placeholder="Re-enter Password" secureTextEntry={true} value={rePassword} onChange={e => setRePassword(e.target.value)} />
                <TextInput style={styles.inputs} keyboardType="numeric" placeholder="Phone Number" maxLength="10" minLength="10" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </View>
            <View style={styles.container__checkbox}>
                <CheckBox
                    value={isSelected}
                    onChange={e => CheckboxSelection(e)}
                    style={styles.checkbox}
                />
                <Text style={styles.checkbox__label}>{""} I agree to the {""}
                    <Text style={styles.checkbox__anchorTag}>Terms of Service</Text>
                    {""} and {""}
                    <Text style={styles.checkbox__anchorTag}>Privacy Policy</Text>
                </Text>
            </View>
            <View style={styles.container__buttons}>
                <TouchableOpacity style={styles.buttonsOne}><Text style={styles.buttons__text} onClick={e => handleLogin(e)}>Register</Text></TouchableOpacity>
                {/* <TouchableOpacity style={styles.buttonsTwo}><Text style={styles.buttons__text}>Cancel</Text></TouchableOpacity> */}
            </View>
            <View style={styles.container__footer}>
                <Text style={styles.footerText}>Already have an account? <Text style={styles.footerText__signUp} onClick={e => navigation.navigate("Login")}> Login</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default Register;

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
        marginTop: "30px",
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
        padding: "5px",
        fontWeight: 400,
        marginTop: "10px",
    },
    container__inputs: {
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "10px",
    },
    inputs: {
        height: "50px",
        border: "1px solid black",
        padding: "10px",
        outline: "none",
        textTransform: "none",
        borderRadius: "5px",
        marginTop: "20px",
        width: "75vw",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
    },
    container__checkbox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80vw",
        marginTop: "25px",
        marginBottom: "25px",
    },
    checkbox__label: {
        flexWrap: "word-wrap",
    },
    checkbox__anchorTag: {
        color: "blue",
        cursor: "pointer",
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
        border: "0.5px solid #FFC107",
        width: "140px",
        backgroundColor: "#FFC107",
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
        marginTop: "25px",
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

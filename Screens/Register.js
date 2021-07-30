import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox } from 'react-native';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        if (!email || !password || !rePassword || !phoneNumber) {
            alert('Please fill the required details')
        }
        else if (!isSelected) {
            alert('Please check the checkbox')
        }
        else {
            navigation.navigate('Home')
        }
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container__heading}>
                <Text style={styles.headingOne}>Hello,</Text>
                <Text style={styles.headingTwo}>Sign Up!</Text>
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
                    <br />
                    <TextField
                        // style={styles.inputs}
                        value={rePassword}
                        onChangeText={(e) => setRePassword(e.target.value)}
                        label="Re-enter Password"
                        // color="secondary"
                        variant="outlined"
                        type="password"
                        required
                    />
                    <br />
                    <TextField
                        // style={styles.inputs}
                        value={phoneNumber}
                        onChangeText={(e) => setPhoneNumber(e.target.value)}
                        label="Number"
                        // color="secondary"
                        variant="outlined"
                        type="tel"
                        required
                    />

                    {/* <TextInput style={styles.inputs} keyboardType="email-address" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} value={password} onChange={e => setPassword(e.target.value)} />
                    <TextInput style={styles.inputs} placeholder="Re-enter Password" secureTextEntry={true} value={rePassword} onChange={e => setRePassword(e.target.value)} />
                    <TextInput style={styles.inputs} keyboardType="numeric" placeholder="Phone Number" maxLength="10" minLength="10" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} /> */}
                </View>
                <View style={styles.container__checkbox}>
                    <CheckBox
                        value={isSelected}
                        onChange={e => CheckboxSelection(e)}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkbox__label}>{""} I agree to the {""}
                        <Text style={styles.checkbox__anchorTag} onClick={e => navigation.navigate("TermsAndConditions")}>Terms of Service</Text>
                        {""} and {""}
                        <Text style={styles.checkbox__anchorTag} onClick={e => navigation.navigate("TermsAndConditions")}>Privacy Policy</Text>
                    </Text>
                </View>
                <View style={styles.container__button}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttons__text} onClick={e => handleLogin(e)}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialIcons}>
                    <Icon style={styles.icon} name="facebook-square" color="#3B5998" size={25} />
                    <Icon style={styles.icon} name="google-plus" color="#DB4A39" size={25} />
                    <Icon style={styles.icon} name="linkedin-square" color="#0E76A8" size={25} />
                </View>
                <View style={styles.container__footer}>
                    <Text style={styles.footerText}>Already have an account?<Text style={styles.footerText__signUp} onClick={e => navigation.navigate("Login")}> Login</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Register;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container__heading: {
        margin: "20px",
        marginLeft: "20px",
        marginTop: "60px",
        // backgroundColor: "cyan",
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
        marginBottom: "60px",
    },
    centerBox: {
        display: "grid",
        placeItems: "center",
    },
    container__inputs: {
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "10px",
        width: "80vw",
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
        color: "black"
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
    container__button: {
        flexDirection: "row",
        textAlign: "center",
        width: "75vw",
        justifyContent: "space-around",
    },
    button: {
        margin: "10px",
        paddingVertical: "10px",
        paddingHorizontal: "20px",
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
    buttons__text: {
        fontSize: "18px",
        fontWeight: 600,
    },
    socialIcons: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: -15,
        width: 120,
        justifyContent: "space-between",
    },
    container__footer: {
        marginTop: "25px",
    },
    footerText: {
        fontSize: "15px",
    },
    footerText__signUp: {
        color: "blue",
        cursor: "pointer",
    },
});

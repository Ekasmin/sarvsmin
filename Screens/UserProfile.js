import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox, Image, ScrollView } from 'react-native';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';


function UserProfile({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

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
            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                    <Text style={styles.navText}>User Profile</Text>
                </View>

                <View style={styles.rightNavRow}>
                    <IconFontAwesome style={styles.settingsIcon} name="gear" size={26} />
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.userAvatar}>
                    <IconFontAwesome style={styles.userIcon} name="smile-o" size={100} />
                </View>

                <View style={styles.centerBox}>
                    <View style={styles.inputView}>
                        <Text style={styles.textHeading}>Name</Text>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>Username</Text>
                        <TextField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            type="password"
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>Email</Text>
                        <TextField
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            variant="outlined"
                            type="password"
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>Password</Text>
                        <TextField
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            variant="outlined"
                            type="tel"
                            required
                        />

                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.buttonManageAddresses}>
                            <Text style={styles.buttonText} onClick={e => handleLogin(e)}>
                                Manage Addresses
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOrderHistory}>
                            <Text style={styles.buttonTextOrder} onClick={e => handleLogin(e)}>
                                Order History
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container__footer}>
                        <TouchableOpacity style={styles.buttonLogout}>
                            <Text style={styles.buttonText} onClick={e => handleLogin(e)}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
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
    settingsIcon: {
        marginRight: 30,
    },
    userAvatar: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
    },
    centerBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    inputView: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        width: "80vw",
    },
    textHeading: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 800,
    },
    inputs: {
        height: 50,
        width: "75vw",
        borderWidth: 1,
        padding: 10,
        textTransform: "none",
        borderRadius: 5,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        color: "black"
    },
    buttonView: {
        flexDirection: "row",
        textAlign: "center",
        width: "75vw",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonManageAddresses: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: 140,
        backgroundColor: "#1EAEFF",
        borderRadius: 25,
    },
    buttonOrderHistory: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 0.5,
        borderColor: "black",
        width: 140,
        backgroundColor: "white",
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 600,
        color: "white",
        textAlign: "center",
    },
    buttonTextOrder: {
        fontSize: 12,
        fontWeight: 600,
        color: "black",
        textAlign: "center",
    },
    buttonLogout: {
        margin: 10,
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: 140,
        backgroundColor: "red",
        borderRadius: 25,
    },
});

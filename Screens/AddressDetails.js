import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox, Image, ScrollView, Picker } from 'react-native';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function AddressDetails({ navigation }) {
    const [flatNumber, setFlatNumber] = useState("");
    const [societyName, setSocietyName] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPinCode] = useState("");

    const [isSelected, setIsSelected] = useState(false);

    const CheckboxSelection = (e) => {
        isSelected === true ? setIsSelected(false) : setIsSelected(true);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topNav}>
                <View style={styles.leftNavRow}>
                    <IconFontAwesome style={styles.goBackIcon} name="arrow-left" size={26} />
                    <Text style={styles.navText}>Home</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.centerBox}>

                    {/* Save as drop down menu */}
                    <View style={styles.saveAsView}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Save as  <IconFontAwesome style={styles.goBackIcon} name="arrow-down" size={20} />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Home</MenuItem>
                            <MenuItem onClick={handleClose}>Office</MenuItem>
                            <MenuItem onClick={handleClose}>Others</MenuItem>
                        </Menu>
                    </View>


                    <View style={styles.containerInputs}>
                        <Text style={styles.textHeading}>Flat Number</Text>
                        <TextField
                            // style={styles.inputs}
                            value={flatNumber}
                            onChange={(e) => setFlatNumber(e.target.value)}
                            // label="E-mail"
                            variant="outlined"
                            type="plain"
                            fullWidth
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>Society/Street Name</Text>
                        <TextField
                            // style={styles.inputs}
                            value={societyName}
                            onChange={(e) => setSocietyName(e.target.value)}
                            // label="Password"
                            variant="outlined"
                            type="plain"
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>Landmark</Text>
                        <TextField
                            // style={styles.inputs}
                            value={landmark}
                            onChange={(e) => setLandmark(e.target.value)}
                            // label="Re-enter Password"
                            variant="outlined"
                            type="plain"
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>City</Text>
                        <TextField
                            // style={styles.inputs}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            // label="Number"
                            variant="outlined"
                            type="plain"
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>State</Text>
                        <TextField
                            // style={styles.inputs}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            // label="Number"
                            variant="outlined"
                            type="plain"
                            required
                        />
                        <br />
                        <Text style={styles.textHeading}>Pin Code</Text>
                        <TextField
                            // style={styles.inputs}
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            // label="Number"
                            variant="outlined"
                            type="plain"
                            required
                        />
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onClick={e => handleLogin(e)}>
                                Update
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddressDetails

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
    centerBox: {
        display: "grid",
        placeItems: "center",
    },
    saveAsView: {
        alignItems: "flex-start",
    },
    textHeading: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 800,
    },
    containerInputs: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        width: "80vw",
    },
    inputs: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        // outline: "none",
        textTransform: "none",
        borderRadius: 5,
        marginTop: 20,
        width: "75vw",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        color: "black"
    },
    containerButton: {
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
        width: 140,
        backgroundColor: "#FF9900",
        borderColor: "#FF9900",
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 600,
        color: "white",
    },
});

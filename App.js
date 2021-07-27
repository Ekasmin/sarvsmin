import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container__heading}>
        <Text style={styles.headingOne}>EKASMIN</Text>
        <Text style={styles.headingTwo}>Login</Text>
      </View>
      <View style={styles.container__inputs}>
        <TextInput style={styles.inputs} placeholder="User ID" />
        <TextInput style={styles.inputs} placeholder="Password" />
      </View>
      <View style={styles.container__buttons}>
        <TouchableOpacity style={styles.buttonsOne}><Text style={styles.buttons__text}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonsTwo}><Text style={styles.buttons__text}>Cancel</Text></TouchableOpacity>
      </View>
      <View style={styles.container__footer}>
        <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerText__signUp}>Sign Up</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    display: "grid",
    placeItems: "center",
    margin: "10px",
  },
  container__heading: {
    margin: "20px",
    flex: 1,
    alignItems: "center",
    margin: "10px",
    marginTop: "50px",
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
    marginTop: "15px",
  },
  container__inputs: {
    marginLeft: "20px",
    marginRight: "20px",
    padding: "10px",
    marginBottom: "10px",
  },
  inputs: {
    height: "50px",
    border: "3px solid whitesmoke",
    padding: "10px",
    outline: "none",
    textTransform: "none",
    borderRadius: "5px",
    marginTop: "25px",
    width: "75vw",
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
    border: "1px solid whitesmoke",
    width: "140px",
    backgroundColor: "#059862",
    borderRadius: "10px",
  },
  buttonsTwo: {
    margin: "10px",
    padding: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
    border: "1px solid whitesmoke",
    width: "140px",
    borderRadius: "10px",
    backgroundColor: "#F51720",
  },
  buttons__text: {
    fontSize: "18px",
    fontWeight: 600,
  },
  container__footer: {
    marginTop: "40px",
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

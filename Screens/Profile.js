import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function Profile({ navigation }) {
    const [searchText, setsearchText] = useState();
    return (
        // <SafeAreaView style={styles.safeArea}>
        //     <View style={styles.container}>
        //     <View style={styles.header}></View>
        //     <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        //     <View style={styles.body}>
        //       <View style={styles.bodyContent}>
        //         <Text style={styles.name}>Name</Text>
        //         <Text style={styles.info}>UX Designer / Mobile developer</Text>
        //         <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

        //         <TouchableOpacity style={styles.buttonContainer}>
        //           <Text>Opcion 1</Text>  
        //         </TouchableOpacity>              
        //         <TouchableOpacity style={styles.buttonContainer}>
        //           <Text>Opcion 2</Text> 
        //         </TouchableOpacity>
        //       </View>
        //   </View>
        // </View>
        // </SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
})
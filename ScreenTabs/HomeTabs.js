import React from 'react'
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import UserProfile from '../Screens/UserProfile';
import Cart from '../Screens/Cart';

function HomeTabs({ navigation }) {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home"
            barStyle={styles.barStyle} >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab__home}>
                            <IconIonicons
                                name="home"
                                size={20}
                                style={{
                                    color: focused ? "#e32f45" : "#748c94",

                                    ...styles.tab__home__icon
                                }}
                            />
                        </View>
                    ),
                }
                } />
            <Drawer.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab__home}>
                            <IconFontAwesome
                                name="user"
                                size={20}
                                style={{
                                    ...styles.tab__home__icon,
                                    color: focused ? "#e32f45" : "#748c94",
                                }}
                            />
                        </View>
                    ),
                }
                } />
            <Drawer.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab__home}>
                            <IconFontAwesome
                                name="user"
                                size={20}
                                style={{
                                    ...styles.tab__home__icon,
                                    color: focused ? "#e32f45" : "#748c94",
                                }}
                            />
                        </View>
                    ),
                }
                } />
        </Drawer.Navigator >
    )
}

export default HomeTabs

const styles = StyleSheet.create({
    barStyle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 60,
        shadowColor: '#7F7DF0',
        shadowOffset: { widthwidth: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    tab__home: {
        alignItems: "center",
        justifyContent: "center",
        // top: 10,
    },
    tab__home__icon: {
        width: 25,
        height: 25,
    }
})
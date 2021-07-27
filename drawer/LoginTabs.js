import React from 'react'
import Login from './Login'
import Register from './Register'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function LoginTabs({ navigation }) {
    const Tab = createMaterialTopTabNavigator();
    // const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    )
}

export default LoginTabs
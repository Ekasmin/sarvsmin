import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginTabs from './TabScreens/LoginTabs';
import Login from './drawer/Login';
import Register from './drawer/Register';
import TermsAndConditions from './drawer/TermsAndConditions';
import SplashScreen from './drawer/SplashScreen';
import HomeTabs from './TabScreens/HomeTabs';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        {/* <Stack.Screen name="LoginTabs" component={LoginTabs} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
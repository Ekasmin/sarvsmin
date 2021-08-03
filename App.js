import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginTabs from './TabScreens/LoginTabs';
import Login from './Screens/Login';
import SignUpForm from './Screens/SignUpForm';
import TermsAndConditions from './Screens/TermsAndConditions';
import SplashScreen from './Screens/SplashScreen';
import HomeTabs from './ScreenTabs/HomeTabs';
import Home from './Screens/Home';
import SignUpPage from './Screens/SignUpPage';
import Product from './Screens/Product';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product" headerMode="none">
        {/* <Stack.Screen name="LoginTabs" component={LoginTabs} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />

        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
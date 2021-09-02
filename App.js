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
import SingleItemPage from './Screens/SingleItemPage';
import Cart from './Screens/Cart';
import CartItem from './Screens/CartItem';
import Payments from './Screens/Payments';
import CardDetails from './Screens/CardDetails';
import SuccessScreen from './Screens/SuccessScreen';
import OrderHistory from './Screens/OrderHistory';
import UserProfile from './Screens/UserProfile';
import Addresses from './Screens/Addresses';
import AddressDetails from './Screens/AddressDetails';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddressDetails" headerMode="none">
        {/* <Stack.Screen name="LoginTabs" component={LoginTabs} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />

        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />

        <Stack.Screen name="SingleItemPage" component={SingleItemPage} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />

        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Addresses" component={Addresses} />
        <Stack.Screen name="AddressDetails" component={AddressDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
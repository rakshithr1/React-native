import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Country from './screens/Country';
import Capital from './screens/Capital';

const Stack = createStackNavigator();

const Navigation: React.FC = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" >
                <Stack.Screen name="home" component={Home} options={{title: "Home"}}/>
                <Stack.Screen name="country" component={Country} options={{title: "Countries"}}/>
                <Stack.Screen name="capital" component={Capital} options={{title: "Capital Weather"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
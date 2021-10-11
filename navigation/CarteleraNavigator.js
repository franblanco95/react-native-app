import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarteleraScreen } from '../screens/CarteleraScreen/CarteleraScreen';
import { PeliculaScreen } from '../screens/PeliculaScreen/PeliculaScreen';

const Stack = createNativeStackNavigator();

const CarteleraStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'rgb(10, 25, 49)' : 'rgb(10, 25, 49)',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}

    >

        <Stack.Screen name="Cartelera" component={CarteleraScreen} />

        <Stack.Screen name="Pelicula" component={PeliculaScreen} />

    </Stack.Navigator>

);

export default CarteleraStackNavigator;